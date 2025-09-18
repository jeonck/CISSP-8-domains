export const domain6Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "보안 평가 및 테스트의 주요 목표는 무엇인가?",
    options: [
      "시스템 성능 최적화",
      "보안 통제의 효과성 검증",
      "사용자 인터페이스 개선",
      "네트워크 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.18.2.1)은 보안 평가가 보안 통제의 효과성을 검증한다고 정의."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "취약점 스캔의 주요 목적은?",
    options: [
      "네트워크 성능 측정",
      "시스템 취약점 식별",
      "사용자 인증 강화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(RA-5)은 취약점 스캔으로 보안 약점을 사전 식별한다고 정의."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "SAST(Static Application Security Testing)의 특징은?",
    options: [
      "런타임 환경에서 테스트",
      "소스 코드 분석 기반 테스트",
      "네트워크 트래픽 분석",
      "사용자 행동 분석"
    ],
    correctAnswer: 1,
    explanation: "OWASP ASVS는 SAST가 컴파일 전 소스 코드에서 취약점을 탐지한다고 정의."
  },
  {
    id: 4,
    difficulty: "중급",
    question: "침투 테스트(Penetration Testing)의 주요 단계는?",
    options: [
      "계획 → 정찰 → 스캔 → 침투 → 보고",
      "설치 → 실행 → 종료",
      "설계 → 개발 → 테스트",
      "분석 → 구현 → 배포"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-115는 침투 테스트의 체계적 방법론(PTES)을 제시."
  },
  {
    id: 5,
    difficulty: "고급",
    question: "OWASP Top 10 취약점을 탐지하기 위한 최적의 테스트 방법은?",
    options: [
      "네트워크 스캔만 수행",
      "SAST와 DAST 조합",
      "로그 분석만 수행",
      "사용자 교육만 실시"
    ],
    correctAnswer: 1,
    explanation: "OWASP Testing Guide는 정적 분석(SAST)과 동적 분석(DAST) 조합을 권장."
  },
  {
    id: 6,
    difficulty: "기초",
    question: "보안 감사(Security Audit)의 정의는?",
    options: [
      "시스템 성능 측정",
      "보안 정책 준수 여부 평가",
      "네트워크 속도 테스트",
      "사용자 만족도 조사"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.18.2.1)은 감사가 정책 및 절차 준수를 검증한다고 정의."
  },
  {
    id: 7,
    difficulty: "중급",
    question: "DAST(Dynamic Application Security Testing)의 장점은?",
    options: [
      "소스 코드 접근 불필요",
      "개발 단계에서만 사용",
      "네트워크 설정 불필요",
      "사용자 교육 대체"
    ],
    correctAnswer: 0,
    explanation: "OWASP ASVS는 DAST가 블랙박스 방식으로 런타임 취약점을 탐지한다고 정의."
  },
  {
    id: 8,
    difficulty: "고급",
    question: "Red Team vs Blue Team 연습의 목적은?",
    options: [
      "네트워크 성능 테스트",
      "공격과 방어 능력 동시 평가",
      "사용자 교육",
      "시스템 백업 테스트"
    ],
    correctAnswer: 1,
    explanation: "NIST Cybersecurity Framework는 Red/Blue Team으로 실전 보안 역량을 평가."
  },
  {
    id: 9,
    difficulty: "기초",
    question: "로그 분석의 주요 목적은?",
    options: [
      "시스템 성능 최적화",
      "보안 사고 탐지 및 분석",
      "사용자 인터페이스 개선",
      "네트워크 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AU-6)은 로그 분석으로 보안 이벤트를 식별한다고 정의."
  },
  {
    id: 10,
    difficulty: "중급",
    question: "취약점 관리 프로세스의 올바른 순서는?",
    options: [
      "식별 → 분류 → 우선순위 → 완화 → 검증",
      "완화 → 식별 → 분류",
      "검증 → 완화 → 식별",
      "분류 → 검증 → 식별"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(RA-5)은 체계적인 취약점 관리 생명주기를 정의."
  },
  {
    id: 11,
    difficulty: "고급",
    question: "모의 해킹과 취약점 평가의 차이점은?",
    options: [
      "모의 해킹은 실제 침투, 취약점 평가는 식별만",
      "둘 다 동일한 방법",
      "취약점 평가가 더 공격적",
      "모의 해킹은 자동화 도구만 사용"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-115는 모의 해킹이 실제 공격을 시뮬레이션한다고 정의."
  },
  {
    id: 12,
    difficulty: "기초",
    question: "보안 메트릭(Security Metrics)의 목적은?",
    options: [
      "네트워크 속도 측정",
      "보안 프로그램 효과성 측정",
      "사용자 만족도 조사",
      "시스템 용량 계획"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-55는 메트릭으로 보안 투자 효과를 정량화한다고 정의."
  },
  {
    id: 13,
    difficulty: "중급",
    question: "CVSS(Common Vulnerability Scoring System)의 목적은?",
    options: [
      "취약점 심각도 표준화",
      "네트워크 성능 측정",
      "사용자 인증 강화",
      "데이터 암호화"
    ],
    correctAnswer: 0,
    explanation: "NIST NVD는 CVSS로 취약점 위험도를 0-10점으로 표준화."
  },
  {
    id: 14,
    difficulty: "고급",
    question: "소스 코드 리뷰에서 우선 확인해야 할 보안 이슈는?",
    options: [
      "코딩 스타일",
      "OWASP Top 10 취약점",
      "주석 작성법",
      "변수 명명 규칙"
    ],
    correctAnswer: 1,
    explanation: "OWASP Code Review Guide는 주요 보안 취약점 패턴 식별을 우선시."
  },
  {
    id: 15,
    difficulty: "기초",
    question: "보안 테스트에서 '화이트박스' 방법의 특징은?",
    options: [
      "시스템 내부 구조 모름",
      "시스템 내부 구조 알고 테스트",
      "네트워크만 테스트",
      "사용자 인터페이스만 테스트"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-115는 화이트박스가 내부 정보 기반 테스트라고 정의."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "보안 모니터링에서 SIEM의 역할은?",
    options: [
      "데이터 백업",
      "보안 이벤트 수집 및 분석",
      "네트워크 속도 향상",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SI-4)은 SIEM이 실시간 보안 모니터링을 제공한다고 정의."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "API 보안 테스트에서 우선 확인해야 할 항목은?",
    options: [
      "응답 속도",
      "인증 및 인가 메커니즘",
      "UI 디자인",
      "데이터베이스 성능"
    ],
    correctAnswer: 1,
    explanation: "OWASP API Security Top 10은 인증/인가 취약점을 최우선으로 제시."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "보안 테스트 계획 수립 시 우선 고려사항은?",
    options: [
      "테스트 비용",
      "테스트 범위 및 목표 정의",
      "테스트 도구 선택",
      "테스트 일정"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.18.2.1)은 명확한 범위와 목표 설정을 우선시."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "클라우드 환경에서 보안 평가 시 특별히 고려해야 할 사항은?",
    options: [
      "물리적 보안만 평가",
      "공유 책임 모델 이해",
      "네트워크 속도만 측정",
      "비용 최적화만 고려"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27017은 클라우드에서 공급자-고객 간 책임 분담을 강조."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "보안 테스트 결과 보고서에 반드시 포함되어야 할 내용은?",
    options: [
      "발견된 취약점과 위험도 평가",
      "테스트 도구 목록만",
      "테스트 시간 기록만",
      "참여자 명단만"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-115는 취약점 식별, 위험 평가, 완화 방안을 포함한 종합 보고서를 권장."
  }
]