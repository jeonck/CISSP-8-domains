export const domain5Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "IAM의 주요 목표는 무엇인가?",
    options: [
      "네트워크 성능 최적화",
      "승인된 사용자만 자산 접근 보장",
      "데이터 백업 자동화",
      "소프트웨어 개발 간소화"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.9.1.1)은 IAM이 인증과 인가를 통해 무단 접근을 방지한다고 정의."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "인증(Authentication)의 정의는?",
    options: [
      "사용자가 자원에 접근할 권한 부여",
      "사용자의 신원 확인",
      "데이터 암호화",
      "네트워크 트래픽 모니터링"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(IA-2)은 인증이 사용자 신원을 검증(예: 비밀번호, MFA)한다고 정의."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "SQL 인젝션 취약점과 관련된 IAM 실패는?",
    options: [
      "약한 인증 메커니즘",
      "네트워크 방화벽 설정 오류",
      "데이터 암호화 부족",
      "백업 시스템 부재"
    ],
    correctAnswer: 0,
    explanation: "OWASP Top 10(A07:2021)은 약한 인증이 SQL 인젝션 같은 공격의 진입점(예: 관리자 계정 탈취)을 제공한다고 명시."
  },
  {
    id: 4,
    difficulty: "중급",
    question: "다중 인증(MFA)의 주요 이점은?",
    options: [
      "데이터 전송 속도 향상",
      "인증 강도 강화",
      "데이터 백업 간소화",
      "네트워크 세그먼테이션"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(IA-2)은 MFA(예: 비밀번호 + OTP)가 단일 인증보다 보안을 강화한다고 정의."
  },
  {
    id: 5,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)에서 IAM 관점의 잠재적 취약점은?",
    options: [
      "약한 관리자 계정 인증",
      "네트워크 암호화 부족",
      "패치되지 않은 Apache Struts",
      "사용자 교육 부족"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-5638은 애플리케이션 취약점이지만, 강력한 IAM(예: MFA)으로 관리자 계정 보호 시 피해 완화 가능(ISO/IEC 27001 A.9.4.2)."
  },
  {
    id: 6,
    difficulty: "기초",
    question: "인가(Authorization)의 정의는?",
    options: [
      "사용자 신원 확인",
      "사용자에게 자원 접근 권한 부여",
      "데이터 암호화",
      "네트워크 트래픽 분석"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AC-3)은 인가가 인증된 사용자에게 권한을 부여한다고 정의."
  },
  {
    id: 7,
    difficulty: "중급",
    question: "최소 권한 원칙(Least Privilege)의 예시는?",
    options: [
      "모든 사용자에게 관리자 권한 부여",
      "필요한 최소 권한만 부여",
      "모든 포트 개방",
      "암호화 키 공유"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.9.1.2)은 최소 권한으로 무단 접근을 방지."
  },
  {
    id: 8,
    difficulty: "고급",
    question: "WannaCry 랜섬웨어(2017)에서 IAM의 역할은?",
    options: [
      "강력한 인증으로 무단 접근 방지",
      "네트워크 세그먼테이션",
      "데이터 암호화",
      "백업 복원"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-0144는 패치 미적용이 원인이지만, MFA(NIST SP 800-53 IA-2)로 관리자 계정 보호 가능."
  },
  {
    id: 9,
    difficulty: "기초",
    question: "비밀번호 정책의 핵심 요소는?",
    options: [
      "짧고 단순한 비밀번호",
      "복잡성, 길이, 정기 변경",
      "모든 사용자 동일 비밀번호",
      "비밀번호 저장 생략"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-63B는 강력한 비밀번호 정책(예: 12자 이상, 특수문자 포함)을 권장."
  },
  {
    id: 10,
    difficulty: "중급",
    question: "역할 기반 접근 제어(RBAC)의 주요 이점은?",
    options: [
      "데이터 암호화",
      "접근 관리 간소화",
      "네트워크 속도 향상",
      "백업 자동화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AC-3)은 RBAC가 역할별 권한 부여로 관리를 간소화한다고 정의."
  },
  {
    id: 11,
    difficulty: "고급",
    question: "클라우드 환경에서 IAM을 강화하기 위한 표준은?",
    options: [
      "ISO/IEC 27017",
      "ISO/IEC 27001",
      "NIST SP 800-53",
      "OWASP Top 10"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27017은 클라우드에서 IAM 통제(예: API 인증)를 제공."
  },
  {
    id: 12,
    difficulty: "기초",
    question: "싱글 사인온(SSO)의 주요 이점은?",
    options: [
      "보안 강화",
      "사용자 편의성 향상",
      "데이터 암호화",
      "네트워크 세그먼테이션"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(IA-5)은 SSO가 단일 인증으로 다중 시스템 접근을 지원한다고 정의."
  },
  {
    id: 13,
    difficulty: "중급",
    question: "Log4j 취약점(2021)에서 IAM의 역할은?",
    options: [
      "강력한 인증으로 무단 접근 방지",
      "네트워크 트래픽 모니터링",
      "데이터 백업",
      "사용자 교육"
    ],
    correctAnswer: 0,
    explanation: "CVE-2021-44228은 애플리케이션 취약점이지만, MFA로 관리자 계정 보호 가능(NIST SP 800-53 IA-2)."
  },
  {
    id: 14,
    difficulty: "고급",
    question: "SAML(Security Assertion Markup Language)의 주요 용도는?",
    options: [
      "데이터 암호화",
      "SSO를 위한 인증 정보 교환",
      "네트워크 트래픽 분석",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-63C는 SAML이 SSO 환경에서 인증 데이터를 공유한다고 정의."
  },
  {
    id: 15,
    difficulty: "기초",
    question: "생체 인증의 예시는?",
    options: [
      "비밀번호",
      "지문 스캔",
      "스마트카드",
      "OTP"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-63B는 생체 인증(지문, 얼굴 인식)을 \"Something You Are\"로 정의."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "IAM에서 \"세션 관리\"의 중요성은?",
    options: [
      "데이터 전송 속도 향상",
      "무단 세션 유지 방지",
      "데이터 암호화",
      "백업 스케줄링"
    ],
    correctAnswer: 1,
    explanation: "OWASP A07:2021은 세션 타임아웃, 토큰 무효화로 세션 하이재킹을 방지."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "GDPR 준수를 위한 IAM 조치는?",
    options: [
      "모든 사용자에게 관리자 권한 부여",
      "PII 접근에 MFA 및 RBAC 적용",
      "네트워크 방화벽 설치",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27018은 PII 보호를 위해 강력한 IAM 통제를 요구."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "접근 제어 모델 중 DAC(Discretionary Access Control)의 특징은?",
    options: [
      "중앙 관리자가 권한 부여",
      "데이터 소유자가 권한 부여",
      "역할 기반 권한 부여",
      "규칙 기반 권한 부여"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AC-3)은 DAC가 소유자 주도 권한 관리를 정의."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "IAM에서 \"계정 잠금\" 정책의 목적은?",
    options: [
      "사용자 편의성 향상",
      "무차별 대입 공격 방지",
      "데이터 암호화",
      "네트워크 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-63B는 계정 잠금(예: 5회 실패 후 잠금)을 권장."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "제로 트러스트 모델에서 IAM의 역할은?",
    options: [
      "모든 접근을 신뢰",
      "지속적인 인증 및 인가 검증",
      "방화벽에만 의존",
      "내부 사용자 신뢰"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-207은 제로 트러스트가 모든 접근을 검증(MFA, RBAC)한다고 정의."
  }
]