import { useState } from 'react'
import PracticeQuiz from './components/PracticeQuiz'
import StudyMaterials from './components/StudyMaterials'
import { domain1Questions } from './data/domain1Questions'
import { domain1StudyMaterials } from './data/domain1StudyMaterials'
import { domain2Questions } from './data/domain2Questions'

const cisspadDomains = [
  {
    id: 1,
    name: 'Security and Risk Management',
    color: 'bg-red-500',
    description: 'CIA Triad 기반 보안 거버넌스, 리스크 평가·관리, 규제 준수(GDPR), BCP/DR 수립'
  },
  {
    id: 2,
    name: 'Asset Security',
    color: 'bg-orange-500',
    description: '데이터 분류·라벨링, 자산 식별·관리, 개인정보 보호, 데이터 보존·폐기 정책'
  },
  {
    id: 3,
    name: 'Security Architecture and Engineering',
    color: 'bg-yellow-500',
    description: '보안 모델(Bell-LaPadula, Biba), 평가 기준(CC), 보안 아키텍처, 취약점 평가'
  },
  {
    id: 4,
    name: 'Communication and Network Security',
    color: 'bg-green-500',
    description: 'OSI 모델, TCP/IP, 방화벽, VPN, 무선 보안, 네트워크 공격 방어'
  },
  {
    id: 5,
    name: 'Identity and Access Management (IAM)',
    color: 'bg-blue-500',
    description: '인증(Authentication), 인가(Authorization), 계정 관리, RBAC, MFA, SSO'
  },
  {
    id: 6,
    name: 'Security Assessment and Testing',
    color: 'bg-indigo-500',
    description: '취약점 평가, 침투 테스트, 보안 감사, 로그 분석, 성능 모니터링'
  },
  {
    id: 7,
    name: 'Security Operations',
    color: 'bg-purple-500',
    description: '사건 대응(NIST SP 800-61), 침해 분석, 로깅·모니터링, 복구·조사 절차'
  },
  {
    id: 8,
    name: 'Software Development Security',
    color: 'bg-pink-500',
    description: 'SDLC 보안, OWASP Top 10, 코드 리뷰, 애플리케이션 보안, DevSecOps'
  }
]

function App() {
  const [selectedDomain, setSelectedDomain] = useState(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showStudyMaterials, setShowStudyMaterials] = useState(false)

  const handleStartQuiz = (domainId) => {
    if (domainId === 1 || domainId === 2) {
      setShowQuiz(true)
      setSelectedDomain(cisspadDomains.find(d => d.id === domainId))
    }
  }

  const handleShowStudyMaterials = (domainId) => {
    if (domainId === 1) {
      setShowStudyMaterials(true)
      setSelectedDomain(cisspadDomains.find(d => d.id === domainId))
    }
  }

  const handleBackToMain = () => {
    setShowQuiz(false)
    setShowStudyMaterials(false)
    setSelectedDomain(null)
  }

  if (showQuiz && selectedDomain?.id === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8">
        <PracticeQuiz
          questions={domain1Questions}
          domainName={selectedDomain.name}
          onBack={handleBackToMain}
        />
      </div>
    )
  }

  if (showQuiz && selectedDomain?.id === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8">
        <PracticeQuiz
          questions={domain2Questions}
          domainName={selectedDomain.name}
          onBack={handleBackToMain}
        />
      </div>
    )
  }

  if (showStudyMaterials && selectedDomain?.id === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8">
        <StudyMaterials
          studyData={domain1StudyMaterials}
          domainName={selectedDomain.name}
          onBack={handleBackToMain}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          🛡️ CISSP Study Guide
        </h1>
        <p className="text-xl text-blue-200 text-center mb-12">
          Master the 8 Security Domains
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cisspadDomains.map((domain) => (
            <div
              key={domain.id}
              className={`${domain.color} bg-opacity-20 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl hover:bg-opacity-30 transition-all cursor-pointer min-h-[200px] flex flex-col justify-center`}
              onClick={() => setSelectedDomain(domain)}
            >
              <div className="text-center">
                <div className={`w-12 h-12 ${domain.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                  {domain.id}
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight mb-3">
                  {domain.name}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedDomain && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">
                Domain {selectedDomain.id}: {selectedDomain.name}
              </h2>
              <button
                onClick={() => setSelectedDomain(null)}
                className="text-white hover:text-red-300 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">📚 Study Materials</h3>
                <p className="text-blue-200 mb-4">Comprehensive content and key concepts for this domain.</p>
                {selectedDomain.id === 1 ? (
                  <button
                    onClick={() => handleShowStudyMaterials(1)}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    학습 자료 보기
                  </button>
                ) : (
                  <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors opacity-50 cursor-not-allowed">
                    준비 중
                  </button>
                )}
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">🎯 Practice Questions</h3>
                <p className="text-blue-200 mb-4">Test your knowledge with domain-specific questions.</p>
                {selectedDomain.id === 1 || selectedDomain.id === 2 ? (
                  <button
                    onClick={() => handleStartQuiz(selectedDomain.id)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    퀴즈 시작 (20문제)
                  </button>
                ) : (
                  <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors opacity-50 cursor-not-allowed">
                    준비 중
                  </button>
                )}
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">📋 Progress Tracking</h3>
                <p className="text-blue-200 mb-4">Monitor your study progress and identify weak areas.</p>
                <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors opacity-50 cursor-not-allowed">
                  준비 중
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App