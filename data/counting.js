// data/counting.js — Counting & Units seed cards
var COUNTING_DATA = [
  {
    id: 'c_t1', tag: 'pre-populated', type: 'table',
    title: 'Native vs. Sino-Korean Numbers',
    tableData: {
      headers: ['Number', 'Sino (한자어)', 'Native (순우리말)', 'Use Sino for', 'Use Native for'],
      rows: [
        ['1', '일', '하나 (한)', 'dates, money, floors', 'counting objects, age'],
        ['2', '이', '둘 (두)', 'phone numbers', 'people, animals'],
        ['3', '삼', '셋 (세)', 'minutes, seconds', 'hours (시)'],
        ['4', '사', '넷 (네)', '', ''],
        ['5', '오', '다섯', '', ''],
        ['6', '육', '여섯', '', ''],
        ['7', '칠', '일곱', '', ''],
        ['8', '팔', '여덟', '', ''],
        ['9', '구', '아홉', '', ''],
        ['10', '십', '열', '', ''],
        ['20', '이십', '스물 (스무)', '', ''],
        ['100', '백', '—', 'only Sino', '—'],
        ['1000', '천', '—', 'only Sino', '—'],
      ]
    }
  },
  {
    id: 'c_t2', tag: 'pre-populated', type: 'table',
    title: 'Common Counters (단위명사)',
    tableData: {
      headers: ['Counter', 'Used for', 'Example'],
      rows: [
        ['개 (個)', 'generic objects', '사과 세 개 (3 apples)'],
        ['명 (名)', 'people (neutral)', '학생 두 명 (2 students)'],
        ['분 (分)', 'people (polite)', '세 분 (3 people — formal)'],
        ['마리', 'animals', '고양이 한 마리 (1 cat)'],
        ['권 (卷)', 'books / volumes', '책 다섯 권 (5 books)'],
        ['장 (張)', 'flat sheets', '종이 한 장 (1 sheet of paper)'],
        ['병 (病)', 'bottles', '물 두 병 (2 bottles of water)'],
        ['잔 (盞)', 'cups / glasses', '커피 한 잔 (1 cup of coffee)'],
        ['번 (番)', 'times / occurrences', '세 번 (3 times)'],
        ['시 (時)', 'o\'clock (Native num)', '두 시 (2 o\'clock)'],
        ['분 (分)', 'minutes (Sino num)', '삼십 분 (30 minutes)'],
        ['살', 'age (Native num)', '스물다섯 살 (25 years old)'],
        ['세 (歲)', 'age (formal, Sino)', '이십오 세 (25 years old)'],
      ]
    }
  },
  {
    id: 'c_r1', tag: 'pre-populated', type: 'rule',
    title: 'Counter Word Order',
    formula: 'Noun + number + counter',
    explain: 'In Korean, the counter comes after the number, and the whole [number + counter] chunk follows the noun. The native number may contract when directly before a counter: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네, 스물 → 스무.',
    ex1: '책 세 권 주세요. (Please give me 3 books.)',
    ex2: '학생이 열두 명 있어요. (There are 12 students.)',
    exception: 'Some counters always use Sino numbers (분 for minutes, 월 for months, 년 for years). Some always use Native (시 for hours, 살 for age).'
  },
  {
    id: 'c_t3', tag: 'pre-populated', type: 'table',
    title: 'Telling the Time',
    tableData: {
      headers: ['Korean', 'Meaning', 'Number type'],
      rows: [
        ['한 시', '1 o\'clock', 'Native for hours (시)'],
        ['두 시 삼십 분', '2:30', 'Native (시) + Sino (분)'],
        ['오전 / 오후', 'AM / PM', 'Sino (오전 = 午前)'],
        ['열두 시', '12 o\'clock', 'Native'],
        ['몇 시예요?', 'What time is it?', '—'],
        ['반', 'half (30 min)', '두 시 반 = 2:30'],
      ]
    }
  },
  {
    id: 'c_t4', tag: 'pre-populated', type: 'table',
    title: 'Dates & Calendar',
    tableData: {
      headers: ['Unit', 'Korean', 'Number type', 'Example'],
      rows: [
        ['Year', '년 (年)', 'Sino', '이천이십육 년 (2026)'],
        ['Month', '월 (月)', 'Sino', '유월 (June) — 6월, note: 6→유, 10→시'],
        ['Day', '일 (日)', 'Sino', '이십일 일 (21st)'],
        ['Day of week', '요일', '—', '월화수목금토일'],
        ['Yesterday', '어제', '—', '—'],
        ['Today', '오늘', '—', '—'],
        ['Tomorrow', '내일', '—', '—'],
      ]
    }
  },
];
