export const domain7Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "보안 운영의 주요 목표는 무엇인가?",
    options: [
      "시스템 성능 최적화",
      "지속적인 보안 유지 및 사건 대응",
      "사용자 인터페이스 개선",
      "소프트웨어 개발 간소화"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.12.1.1)은 보안 운영이 시스템 보호와 사건 관리를 목표로 한다고 정의."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "사건 대응 프로세스의 첫 단계는?",
    options: [
      "복구",
      "탐지 및 분석",
      "패치 적용",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-61은 사건 대응의 첫 단계로 이상 징후 탐지(예: SIEM)를 정의."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "SQL 인젝션 사건 발생 시 보안 운영의 즉각적인 대응은?",
    options: [
      "데이터 백업 복원",
      "네트워크 격리 및 로그 분석",
      "사용자 비밀번호 재설정",
      "시스템 재부팅"
    ],
    correctAnswer: 1,
    explanation: "OWASP Top 10(A03:2021)과 NIST SP 800-61은 SQL 인젝션 탐지 후 격리와 로그 분석을 권장."
  },
  {
    id: 4,
    difficulty: "중급",
    question: "SIEM(Security Information and Event Management)의 주요 기능은?",
    options: [
      "데이터 암호화",
      "실시간 보안 이벤트 모니터링",
      "사용자 인증 강화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AU-6)은 SIEM이 로그를 분석해 보안 사건을 탐지한다고 정의."
  },
  {
    id: 5,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)에서 보안 운영의 실패 원인은?",
    options: [
      "패치 관리 및 모니터링 부족",
      "네트워크 암호화 부족",
      "사용자 인증 실패",
      "데이터 백업 부재"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-5638(Apache Struts)은 패치 지연(ISO/IEC 27001 A.12.6.1)과 모니터링 부족으로 악용."
  },
  {
    id: 6,
    difficulty: "기초",
    question: "패치 관리의 주요 목적은?",
    options: [
      "시스템 성능 향상",
      "취약점 완화",
      "사용자 인증 간소화",
      "데이터 전송 속도 증가"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SI-2)은 패치 관리가 취약점(예: CVE)을 제거한다고 정의."
  },
  {
    id: 7,
    difficulty: "중급",
    question: "비즈니스 연속성 계획(BCP)의 핵심 요소는?",
    options: [
      "데이터 암호화",
      "복구 시간 목표(RTO) 설정",
      "사용자 교육",
      "네트워크 속도 최적화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-34는 BCP가 RTO와 RPO를 통해 중단 최소화를 목표로 한다고 정의."
  },
  {
    id: 8,
    difficulty: "고급",
    question: "WannaCry 랜섬웨어(2017)에서 보안 운영의 대응 실패는?",
    options: [
      "패치 지연 및 모니터링 부족",
      "데이터 암호화 부족",
      "사용자 인증 실패",
      "백업 시스템 부재"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-0144는 패치 관리(NIST SP 800-53 SI-2)와 모니터링(SI-4) 부족으로 악용."
  },
  {
    id: 9,
    difficulty: "기초",
    question: "보안 모니터링의 주요 도구는?",
    options: [
      "데이터 백업 시스템",
      "SIEM 시스템",
      "사용자 인증 시스템",
      "네트워크 스캐너"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AU-6)은 SIEM이 실시간 이상 탐지를 수행한다고 정의."
  },
  {
    id: 10,
    difficulty: "중급",
    question: "Log4j 취약점(2021) 사건 대응에서 보안 운영의 조치는?",
    options: [
      "네트워크 격리 및 패치 적용",
      "사용자 비밀번호 재설정",
      "데이터 마스킹",
      "사용자 교육"
    ],
    correctAnswer: 0,
    explanation: "CVE-2021-44228은 패치(NIST SP 800-53 SI-2)와 격리(NIST SP 800-61)로 대응."
  },
  {
    id: 11,
    difficulty: "고급",
    question: "사건 대응에서 \"봉쇄(Containment)\" 단계의 예시는?",
    options: [
      "백업 복원",
      "영향을 받은 시스템 오프라인",
      "사용자 교육",
      "데이터 암호화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-61은 봉쇄가 피해 확산을 방지(예: 네트워크 격리)한다고 정의."
  },
  {
    id: 12,
    difficulty: "기초",
    question: "재해 복구 계획(DRP)의 주요 목표는?",
    options: [
      "시스템 성능 최적화",
      "시스템 복구 및 서비스 재개",
      "사용자 인증 강화",
      "데이터 전송 속도 증가"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-34는 DRP가 재해 후 시스템 복구를 목표로 한다고 정의."
  },
  {
    id: 13,
    difficulty: "중급",
    question: "보안 운영에서 \"사후 분석(Post-Incident Analysis)\"의 목적은?",
    options: [
      "데이터 암호화",
      "사건 원인 분석 및 프로세스 개선",
      "사용자 인증 간소화",
      "네트워크 속도 최적화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-61은 사후 분석으로 재발 방지와 IRP 개선을 권장."
  },
  {
    id: 14,
    difficulty: "고급",
    question: "GDPR 준수를 위한 보안 운영 조치는?",
    options: [
      "데이터 유출 시 72시간 내 보고",
      "매일 데이터 백업",
      "네트워크 속도 최적화",
      "사용자 교육"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27035와 GDPR은 유출 사건 대응으로 72시간 내 보고를 요구."
  },
  {
    id: 15,
    difficulty: "기초",
    question: "보안 운영에서 \"변경 관리\"의 목적은?",
    options: [
      "시스템 성능 향상",
      "변경으로 인한 리스크 최소화",
      "사용자 인증 간소화",
      "데이터 전송 속도 증가"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.12.1.2)은 변경 관리가 보안 리스크를 줄인다고 정의."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "보안 운영에서 \"백업\"의 주요 목적은?",
    options: [
      "데이터 기밀성 보호",
      "데이터 가용성 보장",
      "데이터 무결성 검증",
      "네트워크 속도 향상"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-34는 백업이 재해 시 가용성을 보장한다고 정의."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "클라우드 환경에서 보안 운영을 위한 표준은?",
    options: [
      "ISO/IEC 27017",
      "ISO/IEC 27001",
      "NIST SP 800-53",
      "OWASP Top 10"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27017은 클라우드 전용 운영 통제(예: 로그 모니터링)를 제공."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "보안 운영에서 \"로그 관리\"의 중요성은?",
    options: [
      "시스템 성능 최적화",
      "보안 사건 탐지 및 조사",
      "사용자 인증 간소화",
      "데이터 전송 속도 증가"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(AU-6)은 로그가 사건 조사에 필수적이라고 정의."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "보안 운영에서 \"테이블탑 연습\"의 목적은?",
    options: [
      "데이터 암호화",
      "사건 대응 계획 테스트",
      "사용자 인증 강화",
      "네트워크 속도 최적화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-61은 테이블탑 연습이 IRP 효과성을 검증한다고 정의."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "보안 운영에서 \"리스크 기반 모니터링\"의 예시는?",
    options: [
      "모든 시스템 무차별 모니터링",
      "High Risk 시스템 우선 모니터링",
      "데이터 백업 테스트",
      "사용자 인터페이스 모니터링"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-30은 리스크 공식(예: SQL 인젝션 = High Risk)을 기반으로 모니터링 우선순위를 설정."
  }
]