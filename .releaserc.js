module.exports = {
  branches: ['main'], // 주로 릴리스를 진행할 브랜치 설정 (예: 'main' 또는 'master')
  plugins: [
    // 커밋 메시지 분석 플러그인
    [
      '@semantic-release/commit-analyzer',
      {
        // 커밋 메시지 규칙을 Gitmoji로 설정
        releaseRules: [
          // Gitmoji와 커밋 타입을 매핑
          { type: '✨', release: 'minor' },  // 새로운 기능 추가
          { type: '🐛', release: 'patch' },  // 버그 수정
          { type: '⚡️', release: 'patch' },  // 성능 개선
          { type: '♻️', release: 'patch' },  // 리팩토링
          { type: '📝', release: false },    // 문서 수정
          { type: '🔧', release: false },    // 기타 잡다한 수정
        ],
      },
    ],
    // 릴리스 노트를 생성하는 플러그인
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts: {
          groupBy: 'type', // 커밋을 타입별로 그룹화
          commitGroupsSort: 'title', // 그룹 제목 정렬
          commitsSort: ['scope', 'subject'], // 커밋 내역 정렬
          noteGroupsSort: 'title', // 노트 그룹 정렬
          mainTemplate: `
            # Release Notes
            {{#each commitGroups}}
            ## {{title}}
            {{#each commits}}
            - {{message}}
            {{/each}}
            {{/each}}
          `,
        },
      },
    ],
    // 변경 사항을 changelog에 반영하는 플러그인
    '@semantic-release/changelog',
    // NPM 패키지 버전 업데이트 및 Git에 반영하는 플러그인
    '@semantic-release/git',
  ],
};
