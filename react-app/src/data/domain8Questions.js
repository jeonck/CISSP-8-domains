export const domain8Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "소프트웨어 개발 보안의 주요 목표는 무엇인가?",
    options: [
      "소프트웨어 성능 최적화",
      "SDLC 전반에 보안 통합",
      "사용자 인터페이스 개선",
      "개발 비용 절감"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.14.2.1)은 SDLC에 보안 관행을 통합하여 취약점을 줄인다고 정의."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "OWASP Top 10의 목적은 무엇인가?",
    options: [
      "네트워크 보안 강화",
      "웹 애플리케이션 취약점 식별",
      "데이터 암호화 표준화",
      "사용자 인증 간소화"
    ],
    correctAnswer: 1,
    explanation: "OWASP Top 10은 SQL 인젝션(A03:2021) 등 주요 웹 취약점을 정의."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "SQL 인젝션 취약점을 방지하기 위한 개발보안 조치는?",
    options: [
      "네트워크 방화벽 설치",
      "입력 검증 및 파라미터화 쿼리",
      "사용자 비밀번호 강화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "OWASP Top 10(A03:2021)은 입력 검증과 파라미터화 쿼리로 SQL 인젝션을 방지."
  },
  {
    id: 4,
    difficulty: "중급",
    question: "정적 코드 분석(SAST)의 주요 목적은?",
    options: [
      "런타임 취약점 테스트",
      "소스 코드에서 취약점 식별",
      "네트워크 트래픽 분석",
      "사용자 인증 강화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-218은 SAST(예: SonarQube)가 코딩 단계에서 취약점을 탐지한다고 정의."
  },
  {
    id: 5,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)의 개발보안 실패 원인은?",
    options: [
      "패치되지 않은 Apache Struts 취약점",
      "네트워크 암호화 부족",
      "사용자 인증 실패",
      "데이터 백업 부재"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-5638은 소프트웨어 패치 미적용(ISO/IEC 27001 A.14.2.3)으로 발생."
  },
  {
    id: 6,
    difficulty: "기초",
    question: "동적 애플리케이션 테스트(DAST)의 특징은?",
    options: [
      "소스 코드 분석",
      "런타임 취약점 테스트",
      "데이터 암호화",
      "사용자 인증"
    ],
    correctAnswer: 1,
    explanation: "OWASP는 DAST(예: OWASP ZAP)가 실행 중인 애플리케이션 취약점을 탐지한다고 정의."
  },
  {
    id: 7,
    difficulty: "중급",
    question: "안전한 코딩 관행의 예시는?",
    options: [
      "모든 사용자 입력 신뢰",
      "입력 검증 및 출력 인코딩",
      "모든 포트 개방",
      "암호화 키 하드코딩"
    ],
    correctAnswer: 1,
    explanation: "OWASP Secure Coding Practices는 XSS와 SQL 인젝션 방지를 위해 검증과 인코딩을 권장."
  },
  {
    id: 8,
    difficulty: "고급",
    question: "Log4j 취약점(2021)을 방지하기 위한 개발보안 조치는?",
    options: [
      "종속성 관리 및 패치 적용",
      "네트워크 세그먼테이션",
      "사용자 비밀번호 강화",
      "데이터 백업"
    ],
    correctAnswer: 0,
    explanation: "CVE-2021-44228은 OWASP Dependency-Check와 패치(NIST SP 800-218)로 완화."
  },
  {
    id: 9,
    difficulty: "기초",
    question: "소프트웨어 개발에서 \"보안 요구사항\" 정의는 어느 단계에서 이루어지는가?",
    options: [
      "배포",
      "계획 및 요구사항 분석",
      "유지보수",
      "테스트"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.14.2.1)은 SDLC 초기 단계에서 보안 요구사항을 정의."
  },
  {
    id: 10,
    difficulty: "중급",
    question: "WannaCry 랜섬웨어(2017)에서 개발보안의 실패는?",
    options: [
      "패치되지 않은 취약점",
      "약한 사용자 인증",
      "데이터 암호화 부족",
      "네트워크 설정 오류"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-0144는 소프트웨어 패치 미적용(NIST SP 800-53 SI-2)으로 악용."
  },
  {
    id: 11,
    difficulty: "고급",
    question: "CI/CD 파이프라인에 보안을 통합하는 방법은?",
    options: [
      "모든 테스트 생략",
      "SAST 및 DAST 도구 통합",
      "사용자 인증 간소화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-218은 CI/CD에 SAST(예: Checkmarx)와 DAST를 통합해 취약점을 탐지."
  },
  {
    id: 12,
    difficulty: "기초",
    question: "소프트웨어 개발에서 \"취약점\"의 정의는?",
    options: [
      "시스템 성능 저하",
      "악용 가능한 코드 약점",
      "사용자 인증 실패",
      "데이터 전송 속도 저하"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-30은 취약점을 악용 가능 약점(예: SQL 인젝션)으로 정의."
  },
  {
    id: 13,
    difficulty: "중급",
    question: "소프트웨어 개발에서 \"보안 테스트\"의 예시는?",
    options: [
      "데이터 암호화",
      "침투 테스트",
      "네트워크 속도 테스트",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(CA-8)은 침투 테스트로 소프트웨어 취약점을 식별."
  },
  {
    id: 14,
    difficulty: "고급",
    question: "클라우드 애플리케이션 개발 보안을 위한 표준은?",
    options: [
      "ISO/IEC 27017",
      "ISO/IEC 27001",
      "NIST SP 800-53",
      "OWASP Top 10"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27017은 클라우드 애플리케이션 보안 통제(예: API 보안)를 제공."
  },
  {
    id: 15,
    difficulty: "기초",
    question: "소프트웨어 개발에서 \"코드 리뷰\"의 목적은?",
    options: [
      "성능 최적화",
      "보안 취약점 식별",
      "사용자 인증 강화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "OWASP Secure Coding Practices는 코드 리뷰로 취약점(예: XSS)을 식별."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "소프트웨어 개발에서 \"종속성 관리\"의 중요성은?",
    options: [
      "데이터 전송 속도 향상",
      "취약한 라이브러리 식별",
      "사용자 인증 간소화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "OWASP Dependency-Check는 취약한 종속성(예: Log4j)을 탐지."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "GDPR 준수를 위한 소프트웨어 개발 보안 조치는?",
    options: [
      "모든 데이터 공개",
      "PII 보호 및 입력 검증",
      "네트워크 속도 최적화",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27018은 PII 보호를 위해 입력 검증과 암호화를 요구."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "소프트웨어 개발에서 \"세션 관리\"의 중요성은?",
    options: [
      "데이터 암호화",
      "세션 하이재킹 방지",
      "네트워크 속도 향상",
      "사용자 인증 생략"
    ],
    correctAnswer: 1,
    explanation: "OWASP A07:2021은 세션 토큰 무효화로 하이재킹을 방지."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "소프트웨어 개발에서 \"퍼징(Fuzzing)\"의 목적은?",
    options: [
      "데이터 백업",
      "비정상 입력으로 취약점 테스트",
      "사용자 인증 강화",
      "네트워크 속도 최적화"
    ],
    correctAnswer: 1,
    explanation: "OWASP는 퍼징이 소프트웨어 취약점을 식별한다고 정의."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "소프트웨어 개발에서 \"리스크 기반 테스트\"의 예시는?",
    options: [
      "모든 코드 무차별 테스트",
      "High Risk 기능 우선 테스트",
      "데이터 백업 테스트",
      "사용자 인터페이스 테스트"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-218은 리스크 공식(예: SQL 인젝션 = High Risk)을 기반으로 테스트 우선순위를 설정."
  }
]