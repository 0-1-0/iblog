if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['ruby'] = [
  [
    [
      /\b(?:require)\b/g,
      'sh_preproc',
      -1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /"/g,
      'sh_string',
      1
    ],
    [
      /'/g,
      'sh_string',
      2
    ],
    [
      /</g,
      'sh_string',
      3
    ],
    [
      /\/[^\n]*\//g,
      'sh_regexp',
      -1
    ],
    [
      /(%r)(\{(?:\\\}|#\{[A-Za-z0-9]+\}|[^}])*\})/g,
      ['sh_symbol', 'sh_regexp'],
      -1
    ],
    [
      /\b(?:alias|begin|BEGIN|break|case|defined|do|else|elsif|end|END|ensure|for|if|in|include|loop|next|raise|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|false|nil|self|true|__FILE__|__LINE__|and|not|or|def|class|module|catch|fail|load|throw)\b/g,
      'sh_keyword',
      -1
    ],
    [
      /(?:^\=begin)/g,
      'sh_comment',
      4
    ],
    [
      /(?:\$[#]?|@@|@)(?:[A-Za-z0-9_]+|'|\"|\/)/g,
      'sh_type',
      -1
    ],
    [
      /[A-Za-z0-9]+(?:\?|!)/g,
      'sh_normal',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'sh_symbol',
      -1
    ],
    [
      /(#)(\{)/g,
      ['sh_symbol', 'sh_cbracket'],
      -1
    ],
    [
      /#/g,
      'sh_comment',
      5
    ],
    [
      /\{|\}/g,
      'sh_cbracket',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      />/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /^(?:\=end)/g,
      'sh_comment',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];