module.exports = {
  'ci': {
    'collect': {
      'staticDistDir': 'dist',
    },
    'assert': {
      'assertions': {
        'categories:performance': ['warn', {'minScore': 0.9}],
        'categories:accessibility': ['error', {'minScore': 1}]
      }
    },
    'upload': {
      'target': 'temporary-public-storage',
    },
  },
};
