// data/hangeul.js — Hangeul Alphabets seed cards
var HANGEUL_DATA = [
  {
    id: 'h_t1', tag: 'pre-populated', type: 'table',
    title: 'Basic Consonants (자음)',
    tableData: {
      headers: ['Letter', 'Name', 'Initial sound', 'Final (batchim)'],
      rows: [
        ['ㄱ', '기역', 'g / k', 'k'],
        ['ㄴ', '니은', 'n', 'n'],
        ['ㄷ', '디귿', 'd / t', 't'],
        ['ㄹ', '리을', 'r / l', 'l'],
        ['ㅁ', '미음', 'm', 'm'],
        ['ㅂ', '비읍', 'b / p', 'p'],
        ['ㅅ', '시옷', 's', 't'],
        ['ㅇ', '이응', 'silent', 'ng'],
        ['ㅈ', '지읒', 'j', 't'],
        ['ㅊ', '치읓', 'ch', 't'],
        ['ㅋ', '키읔', 'k (aspirated)', 'k'],
        ['ㅌ', '티읕', 't (aspirated)', 't'],
        ['ㅍ', '피읖', 'p (aspirated)', 'p'],
        ['ㅎ', '히읗', 'h', 'silent'],
      ]
    }
  },
  {
    id: 'h_t2', tag: 'pre-populated', type: 'table',
    title: 'Double Consonants (쌍자음)',
    tableData: {
      headers: ['Letter', 'Name', 'Sound', 'Notes'],
      rows: [
        ['ㄲ', '쌍기역', 'gg (tense k)', 'no aspiration, tensed'],
        ['ㄸ', '쌍디귿', 'dd (tense t)', 'no aspiration, tensed'],
        ['ㅃ', '쌍비읍', 'bb (tense p)', 'no aspiration, tensed'],
        ['ㅆ', '쌍시옷', 'ss (tense s)', 'no aspiration, tensed'],
        ['ㅉ', '쌍지읒', 'jj (tense j)', 'no aspiration, tensed'],
      ]
    }
  },
  {
    id: 'h_t3', tag: 'pre-populated', type: 'table',
    title: 'Basic Vowels (모음)',
    tableData: {
      headers: ['Letter', 'Romanisation', 'Sound like...', 'Notes'],
      rows: [
        ['ㅏ', 'a', 'a in "father"', 'bright vowel'],
        ['ㅑ', 'ya', 'ya in "yarn"', ''],
        ['ㅓ', 'eo', 'o in "on"', 'dark vowel'],
        ['ㅕ', 'yeo', 'yeo', ''],
        ['ㅗ', 'o', 'o in "open"', 'bright vowel'],
        ['㛛', 'yo', 'yo', ''],
        ['ㅜ', 'u', 'oo in "moon"', 'dark vowel'],
        ['ㅠ', 'yu', 'you', ''],
        ['ㅡ', 'eu', 'u in "put" (unrounded)', 'neutral vowel'],
        ['ㅣ', 'i', 'ee in "see"', ''],
      ]
    }
  },
  {
    id: 'h_t4', tag: 'pre-populated', type: 'table',
    title: 'Compound Vowels (이중모음)',
    tableData: {
      headers: ['Letter', 'Romanisation', 'Sounds like...'],
      rows: [
        ['ㅐ', 'ae', 'e in "bed"'],
        ['ㅒ', 'yae', 'ye in "yes" (short)'],
        ['ㅔ', 'e', 'e in "bed" (same as ㅐ in modern Korean)'],
        ['ㅖ', 'ye', 'ye'],
        ['ㅘ', 'wa', 'wa in "water"'],
        ['ㅙ', 'wae', 'we in "wet"'],
        ['ㅚ', 'oe', 'we (same as ㅙ/ㅞ)'],
        ['ㅝ', 'wo', 'wo in "won"'],
        ['ㅞ', 'we', 'we in "wet"'],
        ['ㅟ', 'wi', 'wi in "wig"'],
        ['ㅢ', 'ui', 'eu+i (glide)'],
      ]
    }
  },
  {
    id: 'h_r1', tag: 'pre-populated', type: 'rule',
    title: 'Syllable Block Structure',
    formula: '(C) + V + (C) → one block',
    explain: 'Every Korean syllable is written as a block. It must have a vowel. An initial consonant is optional — if none, use ㅇ as a placeholder. A final consonant (batchim) is optional. Vowels that go to the right of the consonant stack vertically; vowels that go below stack horizontally.',
    ex1: '가 = ㄱ + ㅏ (consonant left, vowel right)',
    ex2: '음 = ㅇ + ㅡ + ㅁ (placeholder + vowel below + batchim)',
    exception: 'Double batchim: some syllables end in two consonants (e.g. 닭 = ㄷ+ㅏ+ㄹ+ㄱ). Only one is pronounced depending on context.'
  },
];
