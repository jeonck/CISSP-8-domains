import { useState } from 'react'

const StudyMaterials = ({ studyData, domainName, onBack }) => {
  const [expandedSections, setExpandedSections] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const formatContent = (content) => {
    if (!content) return null

    // Split content by lines and format
    const lines = content.trim().split('\n')
    return lines.map((line, index) => {
      if (line.trim() === '') return <br key={index} />

      // Format bold text
      if (line.includes('**')) {
        const parts = line.split('**')
        return (
          <p key={index} className="mb-2">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="font-semibold text-blue-800">{part}</strong> : part
            )}
          </p>
        )
      }

      // Format bullet points
      if (line.trim().startsWith('•')) {
        return (
          <li key={index} className="ml-4 mb-1 text-gray-700">
            {line.trim().substring(1).trim()}
          </li>
        )
      }

      // Regular paragraph
      return <p key={index} className="mb-2 text-gray-700 leading-relaxed">{line}</p>
    })
  }

  const highlightSearchTerm = (text, term) => {
    if (!term) return text
    const regex = new RegExp(`(${term})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part, index) =>
      regex.test(part) ?
        <mark key={index} className="bg-yellow-200 px-1 rounded">{part}</mark> :
        part
    )
  }

  const filteredSections = studyData.sections?.filter(section => {
    if (!searchTerm) return true

    const searchInContent = (content) => {
      return content.toLowerCase().includes(searchTerm.toLowerCase())
    }

    return searchInContent(section.title) ||
           searchInContent(section.content || '') ||
           section.subsections?.some(sub =>
             searchInContent(sub.title) || searchInContent(sub.content || '')
           )
  }) || []

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-t-xl">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              ← 돌아가기
            </button>
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold">{domainName}</h1>
              <p className="text-blue-100 mt-2">Study Materials</p>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="내용 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Introduction */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed">
              {highlightSearchTerm(studyData.description, searchTerm)}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">📚 목차</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filteredSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => toggleSection(section.id)}
                  className="text-left p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 bg-gray-50 hover:bg-gray-100 text-left transition-colors flex items-center justify-between"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {highlightSearchTerm(section.title, searchTerm)}
                  </h2>
                  <span className="text-2xl text-gray-400">
                    {expandedSections[section.id] ? '−' : '+'}
                  </span>
                </button>

                {expandedSections[section.id] && (
                  <div className="p-6 bg-white">
                    {/* Section content */}
                    {section.content && (
                      <div className="mb-6">
                        {formatContent(section.content)}
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((subsection) => (
                          <div key={subsection.id} className="border-l-4 border-blue-200 pl-6">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3">
                              {highlightSearchTerm(subsection.title, searchTerm)}
                            </h3>
                            <div className="prose prose-sm max-w-none">
                              {formatContent(subsection.content)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🚀 다음 단계</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">📝</div>
                <p className="text-sm font-medium text-gray-700">핵심 개념 정리</p>
                <p className="text-xs text-gray-600">CIA Triad, 리스크 관리</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm font-medium text-gray-700">연습 문제 풀기</p>
                <p className="text-xs text-gray-600">20개 실전 문제</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm font-medium text-gray-700">진도 체크</p>
                <p className="text-xs text-gray-600">학습 진행률 확인</p>
              </div>
            </div>
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>"{searchTerm}"</strong> 검색 결과: {filteredSections.length}개 섹션
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudyMaterials