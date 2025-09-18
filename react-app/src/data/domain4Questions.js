export const domain4Questions = [
  {
    id: 1,
    difficulty: "기초",
    question: "네트워크 보안의 주요 목표는 무엇인가?",
    options: [
      "시스템 성능 최적화",
      "CIA Triad 보장",
      "사용자 인터페이스 개선",
      "소프트웨어 개발 간소화"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 27001(A.13.1.1)은 네트워크 보안이 기밀성, 무결성, 가용성을 보장한다고 명시."
  },
  {
    id: 2,
    difficulty: "기초",
    question: "데이터 전송의 기밀성을 보장하는 프로토콜은?",
    options: [
      "HTTP",
      "FTP",
      "TLS",
      "SNMP"
    ],
    correctAnswer: 2,
    explanation: "NIST SP 800-53(SC-8)은 TLS가 데이터 기밀성과 무결성을 보호한다고 정의."
  },
  {
    id: 3,
    difficulty: "중급",
    question: "SQL 인젝션 공격을 네트워크 보안 관점에서 방지하는 최적의 조치는?",
    options: [
      "입력 검증",
      "웹 애플리케이션 방화벽(WAF) 배포",
      "사용자 비밀번호 정책 강화",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "OWASP Top 10(A03:2021)과 NIST SP 800-53(SC-7)은 WAF를 통해 SQL 인젝션 방지를 권장."
  },
  {
    id: 4,
    difficulty: "중급",
    question: "DMZ(비무장지대)의 주요 역할은?",
    options: [
      "내부 네트워크와 공개 서버 분리",
      "모든 트래픽 허용",
      "데이터 암호화",
      "사용자 인증 관리"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SC-7)은 DMZ가 외부 공격으로부터 내부 네트워크를 보호한다고 정의."
  },
  {
    id: 5,
    difficulty: "고급",
    question: "Equifax 데이터 유출(2017)에서 네트워크 보안 관점의 실패는?",
    options: [
      "취약한 네트워크 암호화",
      "패치되지 않은 애플리케이션 취약점",
      "방화벽 설정 오류",
      "사용자 인증 부족"
    ],
    correctAnswer: 1,
    explanation: "CVE-2017-5638(Apache Struts)은 애플리케이션 취약점이지만, WAF로 네트워크 계층에서 탐지 가능(ISO/IEC 27001 A.12.6.1)."
  },
  {
    id: 6,
    difficulty: "기초",
    question: "방화벽의 주요 기능은?",
    options: [
      "데이터 암호화",
      "네트워크 트래픽 필터링",
      "사용자 인증",
      "소프트웨어 패치"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-7)은 방화벽이 트래픽을 제어하여 무단 접근을 방지한다고 정의."
  },
  {
    id: 7,
    difficulty: "중급",
    question: "VPN(가상 사설망)의 주요 목적은?",
    options: [
      "네트워크 속도 향상",
      "안전한 원격 접근 제공",
      "데이터 백업",
      "사용자 교육"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-8)은 VPN이 암호화된 터널링(예: IPsec, SSL)으로 기밀성을 보장한다고 정의."
  },
  {
    id: 8,
    difficulty: "고급",
    question: "DDoS 공격을 방어하기 위한 네트워크 보안 조치는?",
    options: [
      "입력 검증",
      "트래픽 필터링 및 속도 제한",
      "데이터 마스킹",
      "사용자 인증 강화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-5)은 DDoS 방어를 위해 트래픽 제어와 CDN 사용을 권장."
  },
  {
    id: 9,
    difficulty: "기초",
    question: "네트워크 보안에서 \"무결성\"을 보장하는 기술은?",
    options: [
      "해시 함수",
      "데이터 백업",
      "방화벽",
      "사용자 인증"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SI-7)은 해시 함수(예: SHA-256)로 데이터 무결성을 검증."
  },
  {
    id: 10,
    difficulty: "중급",
    question: "WannaCry 랜섬웨어(2017)를 네트워크 보안 관점에서 방지하는 방법은?",
    options: [
      "네트워크 세그먼테이션 및 패치 관리",
      "사용자 비밀번호 강화",
      "데이터 암호화",
      "로그 분석"
    ],
    correctAnswer: 0,
    explanation: "CVE-2017-0144는 네트워크 세그먼테이션(NIST SP 800-53 SC-7)과 패치 관리(SI-2)로 방지 가능."
  },
  {
    id: 11,
    difficulty: "고급",
    question: "네트워크 보안에서 \"제로 트러스트\" 모델의 핵심 요소는?",
    options: [
      "모든 트래픽 신뢰",
      "지속적인 인증 및 모니터링",
      "방화벽에만 의존",
      "내부 네트워크 신뢰"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-207은 제로 트러스트가 모든 트래픽을 검증한다고 정의."
  },
  {
    id: 12,
    difficulty: "기초",
    question: "HTTPS는 어떤 프로토콜을 기반으로 작동하는가?",
    options: [
      "FTP",
      "TLS/SSL",
      "SNMP",
      "HTTP"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-8)은 HTTPS가 TLS/SSL로 암호화된 통신을 제공한다고 정의."
  },
  {
    id: 13,
    difficulty: "중급",
    question: "네트워크 보안에서 IDS(침입 탐지 시스템)와 IPS(침입 방지 시스템)의 차이는?",
    options: [
      "IDS는 탐지, IPS는 탐지 및 차단",
      "IDS는 차단, IPS는 탐지",
      "둘 다 동일",
      "IDS는 암호화, IPS는 인증"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SI-4)은 IDS가 이상 행동을 탐지하고, IPS가 이를 차단한다고 정의."
  },
  {
    id: 14,
    difficulty: "고급",
    question: "클라우드 네트워크 보안에서 데이터 격리를 보장하는 기술은?",
    options: [
      "VLAN 및 가상화",
      "데이터 마스킹",
      "사용자 인증",
      "백업 시스템"
    ],
    correctAnswer: 0,
    explanation: "ISO/IEC 27017은 VLAN과 하이퍼바이저로 멀티테넌시 환경에서 데이터 격리를 보장."
  },
  {
    id: 15,
    difficulty: "기초",
    question: "네트워크 보안에서 \"가용성\"을 위협하는 공격은?",
    options: [
      "SQL 인젝션",
      "DDoS 공격",
      "피싱",
      "데이터 유출"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-5)은 DDoS가 가용성을 저해한다고 정의."
  },
  {
    id: 16,
    difficulty: "중급",
    question: "네트워크 세그먼테이션의 주요 이점은?",
    options: [
      "데이터 전송 속도 향상",
      "공격 확산 방지",
      "사용자 인증 간소화",
      "데이터 암호화"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-7)은 세그먼테이션으로 공격의 영향을 최소화."
  },
  {
    id: 17,
    difficulty: "고급",
    question: "Log4j 취약점(2021)을 네트워크 보안 관점에서 완화하는 방법은?",
    options: [
      "WAF 및 트래픽 모니터링",
      "사용자 비밀번호 재설정",
      "데이터 백업",
      "사용자 교육"
    ],
    correctAnswer: 0,
    explanation: "CVE-2021-44228은 WAF와 SIEM(NIST SP 800-53 SI-4)으로 탐지·완화 가능."
  },
  {
    id: 18,
    difficulty: "기초",
    question: "네트워크 보안에서 \"기밀성\"을 보장하는 기술은?",
    options: [
      "데이터 암호화",
      "로그 분석",
      "백업 시스템",
      "사용자 인증"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SC-8)은 암호화(예: TLS)로 기밀성을 보호."
  },
  {
    id: 19,
    difficulty: "중급",
    question: "네트워크 보안에서 NAT(Network Address Translation)의 역할은?",
    options: [
      "데이터 암호화",
      "내부 IP 주소 숨김",
      "사용자 인증",
      "데이터 백업"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-53(SC-7)은 NAT가 외부로부터 내부 네트워크를 보호한다고 정의."
  },
  {
    id: 20,
    difficulty: "고급",
    question: "SD-WAN(Software-Defined Wide Area Network)의 보안 이점은?",
    options: [
      "트래픽 암호화 및 세그먼테이션",
      "데이터 백업 자동화",
      "사용자 인증 간소화",
      "네트워크 속도 저하"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-53(SC-8, SC-7)은 SD-WAN이 암호화와 세그먼테이션으로 보안을 강화한다고 정의."
  }
]