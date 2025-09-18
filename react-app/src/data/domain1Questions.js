export const domain1Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "보안의 CIA Triad는 무엇을 의미하는가?",
    options: [
      "Confidentiality, Integrity, Availability",
      "Compliance, Identification, Authentication",
      "Confidentiality, Integration, Authorization",
      "Control, Integrity, Accessibility"
    ],
    correctAnswer: 0,
    explanation: "CIA Triad는 정보 보안의 세 가지 핵심 원칙으로, 기밀성(데이터 보호), 무결성(데이터 정확성), 가용성(데이터 접근 가능성)을 의미합니다. ISO/IEC 27001은 이를 보안 정책의 기본으로 정의합니다."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "리스크 관리에서 정성적 평가와 정량적 평가의 주요 차이점은?",
    options: [
      "정성적 평가는 수치 기반, 정량적 평가는 서술 기반",
      "정성적 평가는 서술 기반, 정량적 평가는 수치 기반",
      "둘 다 수치 기반",
      "둘 다 서술 기반"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-30에 따르면, 정성적 평가는 High/Medium/Low와 같은 서술적 척도를 사용하고, 정량적 평가는 확률과 금전적 손실(예: 21.68억 원)을 계산합니다."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "조직이 ISO/IEC 27001을 준수하기 위해 필수적으로 수행해야 하는 것은?",
    options: [
      "매년 침투 테스트 수행",
      "리스크 평가 및 관리 프로세스 수립",
      "모든 시스템에 방화벽 설치",
      "직원 전원에게 보안 인증 요구"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001은 ISMS(정보 보안 관리 시스템)의 핵심으로 리스크 평가(ISO/IEC 27005)를 요구하며, Annex A 통제를 통해 리스크를 관리합니다."
  },
  {
    id: 4,
    difficulty: "기초",
    question: "리스크 공식(리스크 = 위협 × 취약점 × 영향)에서 \"영향\"은 무엇을 의미하는가?",
    options: [
      "위협이 발생할 확률",
      "취약점이 악용될 가능성",
      "위협이 성공했을 때의 손실",
      "보안 통제의 비용"
    ],
    correctAnswer: 2,
    explanation: "NIST SP 800-30에 따르면, 영향은 데이터 유출, 서비스 중단, 벌금 등 리스크 발생 시 조직에 미치는 피해를 의미합니다(예: Equifax 유출의 9천억 원 손실)."
  },
  {
    id: 5,
    difficulty: "중급",
    question: "SQL 인젝션 취약점이 있는 웹사이트의 리스크를 평가할 때, 다음 중 가장 적절한 초기 조치는?",
    options: [
      "네트워크 방화벽 설치",
      "취약점 스캔 수행",
      "직원 보안 교육",
      "백업 시스템 구축"
    ],
    correctAnswer: 1,
    explanation: "OWASP Top 10(A03:2021)에 명시된 SQL 인젝션은 취약점 스캔(예: OWASP ZAP)으로 식별하며, 이는 ISO/IEC 27001(A.12.6.1)의 취약점 관리 요구사항에 부합합니다."
  },
  {
    id: 6,
    difficulty: "고급",
    question: "GDPR 준수를 위해 데이터 유출 시 어떤 조치를 72시간 내에 취해야 하는가?",
    options: [
      "시스템 복구",
      "규제 기관에 보고",
      "취약점 패치",
      "사용자 비밀번호 재설정"
    ],
    correctAnswer: 1,
    explanation: "GDPR은 데이터 유출 발생 시 72시간 내에 규제 기관에 보고를 요구하며, 이는 ISO/IEC 27035(사건 관리)와 연계됩니다."
  },
  {
    id: 7,
    difficulty: "기초",
    question: "보안 거버넌스의 주요 목적은 무엇인가?",
    options: [
      "네트워크 트래픽 모니터링",
      "보안 정책과 절차 수립",
      "소프트웨어 취약점 패치",
      "암호화 키 관리"
    ],
    correctAnswer: 1,
    explanation: "보안 거버넌스는 조직의 보안 전략을 정의하고, ISO/IEC 27001(A.5.1.1)의 보안 정책 수립을 통해 리스크를 관리합니다."
  },
  {
    id: 8,
    difficulty: "중급",
    question: "리스크 수용(Risk Acceptance)의 정의는 무엇인가?",
    options: [
      "리스크를 완전히 제거",
      "리스크를 제3자에게 전가",
      "리스크를 수용하고 모니터링",
      "리스크를 무시"
    ],
    correctAnswer: 2,
    explanation: "NIST SP 800-30에 따르면, 리스크 수용은 낮은 리스크를 감수하며 지속적으로 모니터링하는 전략입니다(예: 저비용 시스템의 소규모 취약점)."
  },
  {
    id: 9,
    difficulty: "고급",
    question: "WannaCry 랜섬웨어(2017)의 주요 원인은 무엇이었으며, 이를 방지하기 위한 최적의 통제는?",
    options: [
      "약한 비밀번호, MFA 도입",
      "패치되지 않은 취약점, 정기 패치 관리",
      "네트워크 침입, IDS/IPS 설치",
      "데이터 유출, 암호화"
    ],
    correctAnswer: 1,
    explanation: "WannaCry는 CVE-2017-0144 취약점을 악용했으며, NIST SP 800-53(SI-2)의 패치 관리로 예방 가능했습니다."
  },
  {
    id: 10,
    difficulty: "기초",
    question: "비즈니스 연속성 계획(BCP)의 주요 목적은 무엇인가?",
    options: [
      "데이터 암호화",
      "서비스 중단 최소화",
      "사용자 인증 강화",
      "취약점 스캔"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-34는 BCP를 통해 재해 발생 시 비즈니스 운영을 복구하고 중단을 최소화하는 계획을 정의합니다."
  },
  {
    id: 11,
    difficulty: "중급",
    question: "리스크 전가(Risk Transfer)의 예시는 무엇인가?",
    options: [
      "방화벽 설치",
      "사이버 보험 가입",
      "취약점 패치",
      "로그 분석"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.17.1.3)은 사이버 보험을 통해 재정적 리스크를 제3자에게 전가하는 것을 권장합니다."
  },
  {
    id: 12,
    difficulty: "고급",
    question: "조직이 리스크 매트릭스를 사용할 때, \"High 가능성 × Medium 영향\"의 결과는?",
    options: [
      "Low Risk",
      "Medium Risk",
      "High Risk",
      "Critical Risk"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27005의 리스크 매트릭스에서 High 가능성과 Medium 영향은 일반적으로 Medium Risk로 평가됩니다."
  },
  {
    id: 13,
    difficulty: "기초",
    question: "보안 정책의 최소 권한 원칙(Least Privilege)은 무엇을 의미하는가?",
    options: [
      "모든 사용자에게 전체 권한 부여",
      "필요한 최소한의 권한만 부여",
      "관리자에게만 권한 부여",
      "권한 검토 생략"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.9.1.2)은 최소 권한 원칙을 통해 무단 접근을 방지합니다."
  },
  {
    id: 14,
    difficulty: "중급",
    question: "리스크 평가에서 정량적 분석의 예시는?",
    options: [
      "High/Medium/Low로 리스크 분류",
      "예상 손실 21.68억 원 계산",
      "취약점 스캔 보고서 작성",
      "보안 정책 수립"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-30은 정량적 분석으로 금전적 손실(예: SQL 인젝션 예시의 21.68억 원)을 계산하는 것을 정의합니다."
  },
  {
    id: 15,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)의 주요 원인은 무엇인가?",
    options: [
      "패치되지 않은 Apache Struts 취약점",
      "약한 비밀번호",
      "네트워크 설정 오류",
      "내부자 위협"
    ],
    correctAnswer: 0,
    explanation: "OWASP Top 10 취약점(CVE-2017-5638)으로 인해 발생, ISO/IEC 27001(A.12.6.1) 미준수 사례."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "보안 인식 교육의 주요 목표는 무엇인가?",
    options: [
      "소프트웨어 개발 속도 향상",
      "인적 오류로 인한 리스크 감소",
      "네트워크 트래픽 최적화",
      "하드웨어 비용 절감"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.7.2.2)은 보안 인식 교육을 통해 피싱, 사회공학 공격 등을 예방합니다."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "리스크 대응 전략 중 \"회피(Avoidance)\"의 예시는?",
    options: [
      "취약한 시스템 폐기",
      "리스크 모니터링",
      "보험 가입",
      "패치 적용"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-30은 리스크 회피를 위해 위험 요소를 제거(예: 구형 시스템 폐기)하는 전략을 정의합니다."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "보안 거버넌스에서 \"책임(Accountability)\"의 의미는?",
    options: [
      "보안 통제 비용 관리",
      "보안 정책 준수 책임 명확화",
      "네트워크 로그 분석",
      "데이터 암호화"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.5.1.1)은 책임을 통해 정책 준수를 보장합니다."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "비즈니스 영향 분석(BIA)의 주요 출력물은?",
    options: [
      "취약점 목록",
      "복구 우선순위 및 RTO/RPO",
      "네트워크 다이어그램",
      "암호화 키"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-34는 BIA를 통해 복구 시간 목표(RTO)와 복구 지점 목표(RPO)를 설정합니다."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "제로 트러스트 모델의 핵심 원칙은?",
    options: [
      "모든 접근을 신뢰",
      "모든 접근을 검증",
      "네트워크 방화벽에만 의존",
      "내부 사용자 신뢰"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-207은 제로 트러스트 모델로 \"Never Trust, Always Verify\"를 강조하며, 모든 접근을 인증·인가합니다."
  }
]