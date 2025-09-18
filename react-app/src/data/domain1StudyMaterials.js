export const domain1StudyMaterials = {
  title: "CISSP Domain 1: Security and Risk Management - Study Materials",
  description: "Domain 1: Security and Risk Management는 CISSP 인증의 첫 번째 도메인으로, 정보 보안의 기초를 다루며 조직의 보안 전략, 리스크 관리, 거버넌스, 규제 준수, 비즈니스 연속성을 포괄합니다. 이 도메인은 보안 전문가가 조직의 보안 목표를 설정하고 리스크를 체계적으로 관리하는 데 필요한 핵심 개념과 프레임워크를 다룹니다. 전체 CISSP 시험에서 약 15%의 비중을 차지하며, ISO/IEC 27001, NIST SP 800-30, GDPR 등 표준을 기반으로 합니다.",

  sections: [
    {
      id: "core-concepts",
      title: "1. 핵심 개념 정리",
      subsections: [
        {
          id: "cia-triad",
          title: "1.1 보안의 기본 원칙: CIA Triad",
          content: `
**정의:** 정보 보안의 세 가지 핵심 원칙으로, 기밀성(Confidentiality), 무결성(Integrity), 가용성(Availability)을 의미.

**세부 내용:**
• **기밀성:** 데이터가 승인되지 않은 접근으로부터 보호됨(예: 암호화, 접근 제어)
• **무결성:** 데이터의 정확성과 완전성 유지(예: 해시 함수, 변경 탐지)
• **가용성:** 데이터와 시스템에 승인된 사용자가 적시에 접근 가능(예: DDoS 방지, 백업)

**참조 표준:** ISO/IEC 27001(A.5.1.1), NIST SP 800-53

**예시:** SQL 인젝션으로 데이터 유출(기밀성 침해), 데이터 변조(무결성 침해), 서비스 중단(가용성 침해)
          `
        },
        {
          id: "security-governance",
          title: "1.2 보안 거버넌스",
          content: `
**정의:** 조직의 보안 목표를 달성하기 위한 정책, 절차, 책임 구조 수립.

**핵심 요소:**
• **보안 정책:** 조직의 보안 요구사항 정의(ISO/IEC 27001 A.5.1.1)
• **책임(Accountability):** 역할과 책임 명확화(예: CISO의 리스크 관리 책임)
• **최소 권한 원칙(Least Privilege):** 필요한 최소 권한만 부여(ISO/IEC 27001 A.9.1.2)

**예시:** 조직이 보안 정책을 통해 패치 관리(SI-2, NIST SP 800-53)를 의무화하여 WannaCry와 같은 랜섬웨어 방지
          `
        },
        {
          id: "risk-management",
          title: "1.3 리스크 관리",
          content: `
**정의:** 위협, 취약점, 영향을 식별·평가·완화하는 프로세스.

**리스크 공식:** 리스크 = 위협 × 취약점 × 영향 (NIST SP 800-30, ISO/IEC 27005)
• **위협(Threat):** 자산에 손상을 줄 수 있는 사건(예: 해커의 SQL 인젝션 시도)
• **취약점(Vulnerability):** 시스템의 약점(예: 입력 검증 부족, OWASP A03:2021)
• **영향(Impact):** 손실 규모(예: 데이터 유출로 21.68억 원 손실)

**리스크 평가 방법:**
• **정성적:** High/Medium/Low로 리스크 분류(예: SQL 인젝션 = High Risk)
• **정량적:** 수치 기반(예: 가능성 0.16 × 135.5억 원 = 21.68억 원)

**리스크 대응 전략:**
• **회피(Avoidance):** 리스크 제거(예: 취약한 시스템 폐기)
• **완화(Mitigation):** 리스크 감소(예: WAF 설치, 입력 검증)
• **전가(Transfer):** 보험 가입(ISO/IEC 27001 A.17.1.3)
• **수용(Acceptance):** 낮은 리스크 모니터링

**참조 표준:** NIST SP 800-30, ISO/IEC 27005
          `
        },
        {
          id: "compliance",
          title: "1.4 규제 준수 및 법적 요구사항",
          content: `
**정의:** 조직이 준수해야 하는 법적·규제적 요구사항(예: GDPR, 개인정보보호법).

**핵심 요구사항:**
• **GDPR:** 데이터 유출 시 72시간 내 보고, 최대 2천만 유로 벌금
• **개인정보보호법(한국):** 개인정보 처리 시 동의 및 보호 조치 요구
• **PCI DSS:** 결제 카드 데이터 보호

**예시:** Equifax(2017) 사건은 GDPR 미준수로 벌금과 평판 손실을 초래
          `
        },
        {
          id: "bcp-dr",
          title: "1.5 비즈니스 연속성 및 재해 복구 (BCP/DR)",
          content: `
**정의:** 재해 발생 시 비즈니스 운영을 유지하고 복구하는 계획.

**핵심 요소:**
• **비즈니스 영향 분석(BIA):** 복구 우선순위, RTO(복구 시간 목표), RPO(복구 지점 목표) 설정
• **BCP:** 서비스 중단 최소화(NIST SP 800-34)
• **DR:** 시스템 복구(예: 백업 복원)

**예시:** 랜섬웨어 공격 후 BCP를 통해 24시간 내 서비스 복구
          `
        },
        {
          id: "security-awareness",
          title: "1.6 보안 인식 교육",
          content: `
**정의:** 직원의 보안 인식을 높여 인적 오류를 줄이는 교육.

**중요성:** 피싱, 사회공학 공격 방지(ISO/IEC 27001 A.7.2.2)

**예시:** 직원이 피싱 이메일을 인식하지 못해 데이터 유출 발생
          `
        },
        {
          id: "zero-trust",
          title: "1.7 제로 트러스트 모델",
          content: `
**정의:** 모든 접근을 신뢰하지 않고 검증(NIST SP 800-207).

**핵심 원칙:** "Never Trust, Always Verify", MFA, 최소 권한

**예시:** 클라우드 환경에서 모든 API 요청에 대해 인증·인가 검증
          `
        }
      ]
    },
    {
      id: "standards",
      title: "2. 주요 표준 및 프레임워크",
      content: `
• **ISO/IEC 27001:** ISMS 프레임워크, 리스크 평가 및 통제(A.5-A.18)
• **NIST SP 800-30:** 리스크 관리 가이드, 정성·정량 분석
• **NIST SP 800-34:** BCP 및 DR 계획
• **GDPR:** 데이터 보호 및 유출 보고
• **OWASP:** 개발보안 관련, SQL 인젝션 등 취약점 관리
      `
    },
    {
      id: "real-cases",
      title: "3. 실제 사례",
      content: `
**Equifax(2017):**
Apache Struts 취약점(CVE-2017-5638)으로 1억 4천만 명 데이터 유출, 약 9천억 원 손실.
리스크 공식 적용 시 High Risk(높은 위협 × 높은 취약점 × 높은 영향).

**WannaCry(2017):**
패치되지 않은 취약점(CVE-2017-0144) 악용, NIST SP 800-53(SI-2) 미준수로 대규모 피해.
      `
    },
    {
      id: "study-tips",
      title: "4. 학습 팁",
      content: `
• **리스크 계산 연습:** SQL 인젝션 예시처럼 정성적(High/Medium/Low) 및 정량적(예: 21.68억 원) 계산을 반복
• **표준 매핑:** ISO/IEC 27001 Annex A와 NIST SP 800-53 통제를 비교 학습
• **시나리오 분석:** 실제 사례(Equifax, WannaCry)를 통해 리스크 평가 및 대응 전략 적용
      `
    },
    {
      id: "conclusion",
      title: "5. 결론",
      content: `
Domain 1은 보안 거버넌스와 리스크 관리의 기초를 제공하며, 조직의 보안 전략을 수립하는 데 필수적입니다.
리스크 공식(리스크 = 위협 × 취약점 × 영향)을 통해 SQL 인젝션 같은 리스크를 평가하고,
ISO/IEC 27001, NIST SP 800-30 기반으로 완화·대응 전략을 수립해야 합니다.
      `
    }
  ]
}