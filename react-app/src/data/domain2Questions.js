export const domain2Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "자산 보안에서 자산 분류의 주요 목적은 무엇인가?",
    options: [
      "네트워크 성능 최적화",
      "자산의 중요도에 따라 보호 우선순위 결정",
      "사용자 인증 강화",
      "소프트웨어 개발 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.8.2.1)은 자산 분류를 통해 민감도(예: 기밀, 중요)에 따라 보호 조치를 우선순위화합니다."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "데이터의 기밀성을 보호하는 가장 효과적인 방법은?",
    options: [
      "데이터 암호화",
      "백업 스케줄링",
      "네트워크 세그먼테이션",
      "로그 모니터링"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SC-13)은 암호화를 통해 데이터 기밀성을 보호하며, 예: TLS 또는 AES-256 사용."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "데이터 소유자(Data Owner)의 주요 역할은?",
    options: [
      "시스템 유지보수",
      "데이터 분류 및 보호 정책 결정",
      "네트워크 방화벽 설정",
      "취약점 스캔 수행"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.8.1.2)은 데이터 소유자가 데이터의 민감도 분류와 보호 조치를 결정한다고 명시."
  },
  {
    id: 4,
    difficulty: "기초",
    question: "데이터의 무결성을 보장하는 방법은?",
    options: [
      "데이터 암호화",
      "해시 함수 사용",
      "다중 인증(MFA)",
      "서비스 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SI-7)은 해시 함수(예: SHA-256)를 통해 데이터 변경 여부를 검증하여 무결성을 보장."
  },
  {
    id: 5,
    difficulty: "중급",
    question: "SQL 인젝션으로 인한 데이터 유출을 방지하기 위해 자산 보안 관점에서 최적의 조치는?",
    options: [
      "입력 검증 및 파라미터화 쿼리",
      "네트워크 방화벽 설치",
      "사용자 비밀번호 정책 강화",
      "시스템 로그 분석"
    ],
    correctAnswer: 0,
    explanation: "OWASP Top 10(A03:2021)은 입력 검증으로 SQL 인젝션 방지, 데이터 기밀성 보호를 권장."
  },
  {
    id: 6,
    difficulty: "고급",
    question: "GDPR에 따라 개인 식별 정보(PII)를 클라우드에 저장할 때 필요한 조치는?",
    options: [
      "데이터 암호화 및 접근 제어",
      "매일 백업 수행",
      "네트워크 트래픽 모니터링",
      "모든 데이터 공개"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27018은 클라우드에서 PII 보호를 위해 암호화와 접근 제어(최소 권한)를 요구."
  },
  {
    id: 7,
    difficulty: "기초",
    question: "자산 인벤토리의 주요 목적은 무엇인가?",
    options: [
      "자산의 위치와 가치를 식별",
      "네트워크 성능 최적화",
      "사용자 인증 자동화",
      "소프트웨어 개발 간소화"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27001(A.8.1.1)은 자산 인벤토리를 통해 보호 대상 자산을 식별."
  },
  {
    id: 8,
    difficulty: "중급",
    question: "데이터 관리자(Data Custodian)의 역할은?",
    options: [
      "데이터 분류 결정",
      "데이터 보호 및 유지보수",
      "보안 정책 수립",
      "리스크 평가 수행"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53은 데이터 관리자가 백업, 암호화, 접근 제어 구현을 담당한다고 정의."
  },
  {
    id: 9,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)의 자산 보안 실패 원인은?",
    options: [
      "패치되지 않은 Apache Struts 취약점",
      "네트워크 방화벽 부재",
      "약한 사용자 비밀번호",
      "내부자 데이터 도용"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-5638로 인해 데이터 유출(1억 4천만 명), ISO/IEC 27001(A.12.6.1) 미준수."
  },
  {
    id: 10,
    difficulty: "기초",
    question: "데이터 잔류성(Data Remanence)이란 무엇인가?",
    options: [
      "삭제 후에도 남아 있는 데이터",
      "데이터의 실시간 백업",
      "데이터 암호화",
      "데이터 전송 속도"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-88은 데이터 잔류성 제거를 위해 안전한 삭제(예: 디스크 소거)를 권장."
  },
  {
    id: 11,
    difficulty: "중급",
    question: "데이터 분류 수준에서 \"기밀(Confidential)\" 데이터의 예시는?",
    options: [
      "회사 홈페이지 콘텐츠",
      "고객의 신용카드 정보",
      "직원 교육 자료",
      "공개 재무 보고서"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.8.2.1)은 기밀 데이터를 민감 정보(예: PII, 결제 정보)로 분류."
  },
  {
    id: 12,
    difficulty: "고급",
    question: "클라우드 환경에서 데이터 보호를 위한 표준은?",
    options: [
      "ISO/IEC 27017",
      "ISO/IEC 27001",
      "NIST SP 800-30",
      "OWASP Top 10"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27017은 클라우드 전용 보안 통제(예: 데이터 격리, 암호화)를 제공."
  },
  {
    id: 13,
    difficulty: "기초",
    question: "데이터 백업의 주요 목적은?",
    options: [
      "데이터 기밀성 보호",
      "데이터 가용성 보장",
      "데이터 무결성 검증",
      "데이터 전송 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-34는 백업을 통해 재해 발생 시 데이터 접근성을 보장."
  },
  {
    id: 14,
    difficulty: "중급",
    question: "데이터 암호화에서 대칭 키 암호화의 예시는?",
    options: [
      "RSA",
      "AES",
      "Diffie-Hellman",
      "ECC"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-13)은 AES(대칭 키)를 데이터 기밀성 보호에 권장."
  },
  {
    id: 15,
    difficulty: "고급",
    question: "Log4j 취약점(2021)의 자산 보안 관점에서의 영향은?",
    options: [
      "네트워크 성능 저하",
      "데이터 유출 및 무단 접근",
      "사용자 인증 실패",
      "하드웨어 손상"
    ],
    correctAnswer: 1,
    explanation: "CVE-2021-44228로 인해 데이터 기밀성 침해, ISO/IEC 27001(A.12.6.1) 미준수."
  },
  {
    id: 16,
    difficulty: "기초",
    question: "데이터 소유권(Data Ownership)의 정의는?",
    options: [
      "데이터에 대한 물리적 소유",
      "데이터 관리 및 보호 책임",
      "데이터 암호화 키 생성",
      "데이터 전송 프로토콜 관리"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.8.1.2)은 데이터 소유자가 보호 정책을 정의한다고 명시."
  },
  {
    id: 17,
    difficulty: "중급",
    question: "데이터 마스킹(Data Masking)의 목적은?",
    options: [
      "데이터 백업",
      "민감 데이터 노출 방지",
      "데이터 무결성 검증",
      "데이터 전송 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27018은 테스트 환경에서 PII를 마스킹하여 기밀성을 보호."
  },
  {
    id: 18,
    difficulty: "고급",
    question: "PCI DSS 준수를 위해 필수적인 데이터 보호 조치는?",
    options: [
      "모든 데이터 암호화",
      "카드 소지자 데이터 암호화 및 토큰화",
      "네트워크 로그 분석",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "PCI DSS는 결제 카드 데이터 보호를 위해 암호화와 토큰화를 요구."
  },
  {
    id: 19,
    difficulty: "기초",
    question: "자산 보안에서 \"가용성\"의 의미는?",
    options: [
      "데이터 변경 방지",
      "승인된 사용자의 데이터 접근 보장",
      "데이터 암호화",
      "데이터 복제 방지"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53은 가용성을 통해 DDoS 공격 등으로부터 데이터 접근성을 보장."
  },
  {
    id: 20,
    difficulty: "중급",
    question: "데이터 폐기 시 안전한 방법은?",
    options: [
      "단순 삭제",
      "디스크 포맷",
      "물리적 파괴 또는 안전한 소거",
      "데이터 암호화"
    ],
    correctAnswer: 2,
    explanation: "NIST SP 800-88은 데이터 잔류성 제거를 위해 안전한 소거(예: DoD 5220.22-M) 또는 물리적 파괴를 권장."
  }
]