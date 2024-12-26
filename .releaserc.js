module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'atom',
        releaseRules: [
          { type: '💥', release: 'major'},
          { type: '✨', release: 'minor' },
          { type: '🐛', release: 'patch' },
          { type: '⚡️', release: 'patch' },
          { type: '♻️', release: 'patch' },
          { type: '🔧', release: false },
          { type: '📝', release: false },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'atom',
        writerOpts: {
          groupBy: 'type',
          commitGroupsSort: 'title',
          commitsSort: ['scope', 'subject'],
          noteGroupsSort: 'title',
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
  ],
}
