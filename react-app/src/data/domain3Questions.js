export const domain3Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "보안 아키텍처의 주요 목표는 무엇인가?",
    options: [
      "시스템 성능 최적화",
      "CIA Triad 보장",
      "사용자 인터페이스 개선",
      "개발 비용 절감"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.11.1)은 보안 아키텍처가 기밀성, 무결성, 가용성을 보장하도록 설계되어야 한다고 명시."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "암호화에서 대칭 키 알고리즘의 특징은?",
    options: [
      "공개 키와 개인 키 쌍 사용",
      "동일한 키로 암호화 및 복호화",
      "느린 처리 속도",
      "인증서 기반 인증"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-13)은 AES와 같은 대칭 키 알고리즘이 단일 키를 사용한다고 정의."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "SQL 인젝션 취약점을 방지하기 위한 보안 아키텍처 접근은?",
    options: [
      "네트워크 방화벽 설치",
      "입력 검증 및 WAF(웹 애플리케이션 방화벽) 구현",
      "사용자 비밀번호 정책 강화",
      "시스템 백업"
    ],
    correctAnswer: 1,
    explanation: "OWASP Top 10(A03:2021)은 입력 검증과 WAF(NIST SP 800-53 SC-7)를 통해 SQL 인젝션 방지를 권장."
  },
  {
    id: 4,
    difficulty: "중급",
    question: "제로 트러스트 아키텍처의 핵심 원칙은?",
    options: [
      "모든 네트워크 트래픽 신뢰",
      "모든 접근을 검증",
      "방화벽에만 의존",
      "내부 사용자 신뢰"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-207은 \"Never Trust, Always Verify\" 원칙을 기반으로 제로 트러스트를 정의."
  },
  {
    id: 5,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)의 보안 아키텍처 실패 원인은?",
    options: [
      "패치되지 않은 Apache Struts 취약점",
      "약한 네트워크 암호화",
      "사용자 인증 부족",
      "내부자 데이터 도용"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-5638로 인해 발생, ISO/IEC 27001(A.12.6.1) 취약점 관리 미준수."
  },
  {
    id: 6,
    difficulty: "기초",
    question: "방화벽의 주요 역할은 무엇인가?",
    options: [
      "데이터 암호화",
      "네트워크 트래픽 필터링",
      "사용자 인증",
      "소프트웨어 개발 지원"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-7)은 방화벽이 트래픽을 제어하여 무단 접근을 방지한다고 정의."
  },
  {
    id: 7,
    difficulty: "중급",
    question: "암호화된 데이터 전송을 위한 프로토콜은?",
    options: [
      "HTTP",
      "FTP",
      "TLS",
      "SNMP"
    ],
    correctAnswer: 2,
    explanation: "NIST SP 800-53(SC-8)은 TLS를 통해 데이터 기밀성과 무결성을 보호."
  },
  {
    id: 8,
    difficulty: "고급",
    question: "클라우드 환경에서 데이터 격리를 보장하는 기술은?",
    options: [
      "VLAN",
      "하이퍼바이저 기반 가상화",
      "패치 관리",
      "로그 분석"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27017은 하이퍼바이저를 통해 멀티테넌시 환경에서 데이터 격리를 보장."
  },
  {
    id: 9,
    difficulty: "기초",
    question: "보안 엔지니어링에서 \"최소 권한 원칙\"의 적용 예시는?",
    options: [
      "모든 사용자에게 관리자 권한 부여",
      "필요한 최소 권한만 부여",
      "네트워크 포트 모두 개방",
      "암호화 키 공유"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.9.1.2)은 최소 권한으로 무단 접근을 방지."
  },
  {
    id: 10,
    difficulty: "중급",
    question: "Log4j 취약점(2021)을 완화하기 위한 보안 아키텍처 조치는?",
    options: [
      "네트워크 방화벽 강화",
      "소프트웨어 패치 및 WAF 적용",
      "사용자 교육",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "CVE-2021-44228은 패치(NIST SP 800-53 SI-2)와 WAF로 완화 가능."
  },
  {
    id: 11,
    difficulty: "고급",
    question: "보안 아키텍처에서 TCB(Trusted Computing Base)의 역할은?",
    options: [
      "네트워크 트래픽 모니터링",
      "시스템 보안 보장",
      "사용자 인증 관리",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "TCB는 시스템의 보안 기능을 수행하는 하드웨어·소프트웨어의 집합(NIST SP 800-53)."
  },
  {
    id: 12,
    difficulty: "기초",
    question: "암호화에서 공개 키 알고리즘의 예시는?",
    options: [
      "AES",
      "RSA",
      "DES",
      "Blowfish"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-13)은 RSA를 비대칭 키 암호화로 정의."
  },
  {
    id: 13,
    difficulty: "중급",
    question: "보안 아키텍처에서 \"방어 심층(Defense-in-Depth)\"의 의미는?",
    options: [
      "단일 보안 통제에 의존",
      "다중 계층 보안 통제 구현",
      "모든 포트 개방",
      "사용자 인증 생략"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53은 다중 통제(방화벽, IDS, 암호화)로 리스크 완화."
  },
  {
    id: 14,
    difficulty: "고급",
    question: "WannaCry 랜섬웨어(2017)를 방지하기 위한 보안 아키텍처 조치는?",
    options: [
      "패치 관리 및 네트워크 세그먼테이션",
      "사용자 비밀번호 강화",
      "데이터 마스킹",
      "로그 분석"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-0144 취약점은 NIST SP 800-53(SI-2, SC-7) 준수로 방지 가능."
  },
  {
    id: 15,
    difficulty: "기초",
    question: "IDS(침입 탐지 시스템)의 주요 기능은?",
    options: [
      "데이터 암호화",
      "이상 행동 탐지",
      "사용자 인증",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SI-4)은 IDS가 비정상 트래픽을 탐지한다고 정의."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "보안 아키텍처에서 DMZ(비무장지대)의 역할은?",
    options: [
      "내부 네트워크 보호",
      "모든 트래픽 허용",
      "데이터 암호화",
      "사용자 인증 관리"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SC-7)은 DMZ가 공개 서버와 내부 네트워크를 분리한다고 정의."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "클라우드 보안 아키텍처에서 데이터 보호를 위한 표준은?",
    options: [
      "ISO/IEC 27017",
      "ISO/IEC 27001",
      "NIST SP 800-30",
      "OWASP Top 10"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27017은 클라우드 전용 보안 통제(예: 가상화 보안)를 제공."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "보안 아키텍처에서 \"가용성\"을 보장하는 방법은?",
    options: [
      "데이터 암호화",
      "이중화 및 장애 복구",
      "사용자 인증",
      "코드 검증"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(CP-10)은 이중화로 가용성을 보장."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "보안 아키텍처에서 \"보안 패치 관리\"의 중요성은?",
    options: [
      "시스템 성능 향상",
      "취약점 악용 방지",
      "사용자 경험 개선",
      "데이터 전송 속도 증가"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SI-2)은 패치 관리로 취약점(예: Log4j) 완화."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "보안 아키텍처에서 \"종단 간 암호화(End-to-End Encryption)\"의 예시는?",
    options: [
      "데이터베이스 백업",
      "HTTPS 통신",
      "네트워크 세그먼테이션",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-8)은 HTTPS(TLS)를 통해 종단 간 암호화를 구현."
  }
]