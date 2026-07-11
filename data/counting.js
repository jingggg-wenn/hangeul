// data/counting.js — Counting & Units seed cards
var COUNTING_DATA = [
  {
    id: 'c_v7', tag: 'B1T1', type: 'vocab', group: 'counting',
    title: 'Korean Numerals (순우리말 수)',
    vocabData: [
      { kr: '하나\n(한)', en: '1' },
      { kr: '둘\n(두)', en: '2' },
      { kr: '셋\n(세)', en: '3' },
      { kr: '넷\n(네)', en: '4' },
      { kr: '다섯', en: '5' },
      { kr: '여섯', en: '6' },
      { kr: '일곱', en: '7' },
      { kr: '여덟', en: '8' },
      { kr: '아홉', en: '9' },
      { kr: '열', en: '10' },
    ],
    vocabNote: 'Numbers 1-4 contract before Counting Units: 하나 -> 한, 둘 -> 두, 셋 -> 세, 넷 -> 네. e.g. 한 개 (1 thing), 두 명 (2 people).\nUsed for: counting objects, age (살), hours (시), people.'
  },
  {
    id: 'c_v8', tag: 'B1T1', type: 'vocab', group: 'counting',
    title: 'Chinese Numerals (한자어 수)',
    vocabData: [
      { kr: '일', en: '1' },
      { kr: '이', en: '2' },
      { kr: '삼', en: '3' },
      { kr: '사', en: '4' },
      { kr: '오', en: '5' },
      { kr: '육', en: '6' },
      { kr: '칠', en: '7' },
      { kr: '팔', en: '8' },
      { kr: '구', en: '9' },
      { kr: '십', en: '10' },
      { kr: '백', en: '100' },
      { kr: '천', en: '1,000' },
      { kr: '만', en: '10,000' },
    ],
    vocabNote: 'Chinese numerals are based on Chinese characters. Used for: dates (년/월/일), money (원), phone numbers, minutes (분), seconds (초), floors, addresses.'
  },
  {
    id: 'c_t2', tag: 'pre-populated', type: 'table', group: 'counting',
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
    id: 'c_r1', tag: 'pre-populated', type: 'rule', group: 'counting',
    title: 'Counter Word Order',
    formula: 'Noun + number + counter',
    explain: 'In Korean, the counter comes after the number, and the whole [number + counter] chunk follows the noun. The native number may contract when directly before a counter: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네, 스물 → 스무.',
    ex1: '책 세 권 주세요. (Please give me 3 books.)',
    ex2: '학생이 열두 명 있어요. (There are 12 students.)',
    exception: 'Some counters always use Sino numbers (분 for minutes, 월 for months, 년 for years). Some always use Native (시 for hours, 살 for age).'
  },
  {
    id: 'c_t5', tag: 'B1T2', type: 'vocab', group: 'positional',
    title: 'Positional Place Words (위치 단어)',
    vocabData: [
      { kr: '위', en: 'On top / Above' },
      { kr: '아래', en: 'Below / Under' },
      { kr: '앞', en: 'In front' },
      { kr: '뒤', en: 'Behind' },
      { kr: '옆', en: 'Beside' },
      { kr: '오른쪽', en: 'Right' },
      { kr: '왼쪽', en: 'Left' },
      { kr: '안', en: 'Inside' },
      { kr: '밖\n바깥', en: 'Outside' },
      { kr: '건너편\n맞은편', en: 'Opposite' },
      { kr: '사이\nN1 하고 N2 사이에', en: 'In between' },
    ],
    vocabNote: 'Use Place Noun + [position] + 에 to indicate location. e.g. 책상 위에 = on top of the desk. For 사이, use NOUN1 하고 NOUN2 사이에.\nTip: 오른쪽 starts with "오" which sounds like "O" as in "O-kay, right!" to remember it is the right side.'
  },
  {
    id: 'c_r2', tag: 'B1T2', type: 'rule', group: 'positional',
    title: 'Positional Marker (에)',
    formula: 'Noun + positional word + 에 + [Noun + 이/가 + 있어요/없어요]',
    explain: 'All positional words must be used with the place marker 에 to indicate location. The noun comes first, followed by the positional word, then 에.',
    ex1: '책상 위에 있어요. (It is on top of the desk.)',
    ex2: '학교 앞에서 만나요. (Let\'s meet in front of the school.)',
    exception: 'Use 에 for static location (있다/없다) and 에서 for action location. 사이 requires two nouns: A 하고 B 사이에 (between A and B).'
  },
  {
    id: 'c_r3', tag: 'B2T2', type: 'rule', group: 'time-grammar',
    title: 'Duration Marker — For Time Period (동안)',
    formula: '<time period> + 동안 + <action verb / noun>',
    explain: 'The time duration always comes first in a sentence. 동안 means "for" or "during" a period of time. Place the time expression before 동안, then follow with the verb or action. Korean word order puts the duration at the front of the clause, not at the end like in English.',
    ex1: '두 시간 동안 공부했어요. (I studied for two hours.)',
    ex2: '방학 동안 여행했어요. (I travelled during the vacation.)',
    exception: 'For approximate durations, add 쯤: 한 시간쯤 동안 (for about one hour). 동안 can be omitted when the duration is obvious from context: 삼 년 살았어요 (I lived there for 3 years).'
  },
  {
    id: 'c_r4', tag: 'B2T2', type: 'rule', group: 'time-grammar',
    title: 'Time (시간 말하기)',
    formula: '<Kor Num> 시 + <Chi Num> 분 + 이에요',
    explain: 'Hours use Korean numerals with 시, minutes use Sino-Korean numerals with 분. Combine both to tell the full time. 30 minutes can be replaced with 반 (half).',
    ex1: '세 시 이십 분이에요. (It is 3:20.)',
    ex2: '두 시 반이에요. (It is 2:30.)',
    exception: 'AM = 오전, PM = 오후. Place before the time: 오후 세 시 (3 PM). To ask the time: 몇 시예요? (What time is it?). 30 minutes = 반: 한 시 반 (1:30).'
  },
  {
    id: 'c_r6', tag: 'B1T2', type: 'rule', group: 'time-grammar',
    title: 'Time Marker (에)',
    formula: 'Time Noun + 에 + Verb',
    explain: 'Attach the particle 에 to a time noun to mark when an action happens. The time expression comes before the verb in Korean word order.',
    ex1: '세 시에 만나요. (Let\'s meet at 3 o\'clock.)',
    ex2: '월요일에 학교에 가요. (I go to school on Monday.)',
    exception: 'Do not use 에 with relative time words: 어제, 오늘, 내일, 매일, 매달, 매년. These function as adverbs on their own. e.g. 오늘 학교에 가요. (I go to school today.)'
  },
  {
    id: 'c_v4', tag: 'B2T2', type: 'vocab', group: 'time-grammar',
    title: 'Time Period Units (기간 단위) - Used with Duration Marker (동안)',
    vocabData: [
      { prefix: 'Chinese\nNum', kr: '년', en: 'Years' },
      { prefix: 'Korean\nNum', kr: '달', en: 'Months' },
      { prefix: 'Chinese \nNum', kr: '주', en: 'Weeks' },
      { prefix: 'Chinese\nNum', kr: '일', en: 'Days' },
      { prefix: 'Korean\nNum', kr: '시간', en: 'Hours' },
      { prefix: 'Chinese\nNum', kr: '분', en: 'Minutes' },
      { prefix: 'Chinese\nNum', kr: '초', en: 'Seconds' },
    ],
    vocabNote: 'Hours (시간) uses Korean numerals: 한 시간, 두 시간, 세 시간. Months can also be expressed as Chi Num + 개월 (e.g. 삼 개월 = 3 months). For 1 week, the full form is 일주일 (one-week-day).'
  },
  {
    id: 'c_v6', tag: 'B2T2', type: 'vocab', group: 'time-grammar',
    title: 'Question Words for Time Duration (기간 의문사)',
    vocabData: [
      { kr: '몇 년', en: 'How many years' },
      { kr: '몇 달\n몇 개월', en: 'How many months' },
      { kr: '몇 주', en: 'How many weeks' },
      { kr: '며칠', en: 'How many days', star: true },
      { kr: '몇 시간', en: 'How many hours' },
      { kr: '몇 시', en: 'What time' },
      { kr: '무슨 요일', en: 'What day' },
      { kr: '얼마 동안', en: 'How long (duration)' },
    ],
    vocabNote: '몇 means "what/how many" for counting units. Attach 몇 in front of the time unit to ask "how many". * 며칠 is an irregular contraction of 몇 일. 얼마 동안 asks about the overall length of time without specifying a unit.'
  },
  {
    id: 'c_v5', tag: 'B2T2', type: 'vocab', group: 'time-grammar',
    title: 'Common Day Durations (일)',
    vocabData: [
      { kr: '하루', en: '1 day' },
      { kr: '이틀', en: '2 days' },
      { kr: '사흘', en: '3 days' },
      { kr: '나흘', en: '4 days' },
      { kr: '닷새', en: '5 days' },
      { kr: '열흘', en: '10 days' },
      { kr: '보름', en: '15 days' },
    ],
    vocabNote: 'These are native Korean day-count words used for durations. Beyond 5 days, most speakers switch to Chinese Numericals : 육일 (6 days), 칠일 (7 days), etc. 하루 is very common in everyday speech: 하루 종일 = all day long.'
  },
  {
    id: 'c_v1', tag: 'B1T2', type: 'vocab', group: 'months-seasons',
    title: 'Four Seasons (사 계절)',
    vocabData: [
      { kr: '봄', en: 'Spring' },
      { kr: '여름', en: 'Summer' },
      { kr: '가을', en: 'Fall' },
      { kr: '겨울', en: 'Winter' },
    ]
  },
  {
    id: 'c_v2', tag: 'B1T2', type: 'vocab', group: 'months-seasons',
    title: 'Months (월) - Chinese Numericals',
    vocabData: [
      { kr: '일월', en: 'January' },
      { kr: '이월', en: 'February' },
      { kr: '삼월', en: 'March' },
      { kr: '사월', en: 'April' },
      { kr: '오월', en: 'May' },
      { kr: '유월', en: 'June', star: true },
      { kr: '칠월', en: 'July' },
      { kr: '팔월', en: 'August' },
      { kr: '구월', en: 'September' },
      { kr: '시월', en: 'October', star: true },
      { kr: '십일월', en: 'November' },
      { kr: '십이월', en: 'December' },
    ],
    vocabNote: '* 유월 (not 육월) and 시월 (not 십월) are irregular. The standard readings 육 and 십 change to 유 and 시 before 월 to avoid awkward consonant clusters. This only applies to month names.'
  },
  {
    id: 'c_v3', tag: 'B1T2', type: 'vocab', group: 'months-seasons',
    title: 'Days of the Month (일) - Chinese Numericals',
    vocabData: [
      { kr: '일일', en: '1st' },
      { kr: '이일', en: '2nd' },
      { kr: '삼일', en: '3rd' },
      { kr: '사일', en: '4th' },
      { kr: '오일', en: '5th' },
      { kr: '육일', en: '6th' },
      { kr: '칠일', en: '7th' },
      { kr: '팔일', en: '8th' },
      { kr: '구일', en: '9th' },
      { kr: '십일', en: '10th' },
      { kr: '이십일', en: '20th' },
      { kr: '삼십일', en: '30th' },
    ],
    vocabNote: 'Days use Sino-Korean numbers + 일. Pattern: number + 일. e.g. 십오일 = 15th, 이십삼일 = 23rd.'
  },
  {
    id: 'c_v9', tag: 'B1T2', type: 'vocab', group: 'months-seasons',
    title: 'Days of the Week (요일)',
    vocabData: [
      { kr: '월요일', en: 'Monday', origin: '月 Moon' },
      { kr: '화요일', en: 'Tuesday', origin: '火 Fire' },
      { kr: '수요일', en: 'Wednesday', origin: '水 Water' },
      { kr: '목요일', en: 'Thursday', origin: '木 Wood' },
      { kr: '금요일', en: 'Friday', origin: '金 Gold' },
      { kr: '토요일', en: 'Saturday', origin: '土 Earth' },
      { kr: '일요일', en: 'Sunday', origin: '日 Sun' },
    ],
    vocabNote: 'All days end with 요일. The first character comes from Chinese elements: 월(Moon), 화(Fire), 수(Water), 목(Wood), 금(Gold), 토(Earth), 일(Sun).\nTo ask: 무슨 요일이에요? (What day is it?)'
  },
  {
    id: 'c_r5', tag: 'B1T2', type: 'rule', group: 'months-seasons',
    title: 'Date (날짜)',
    formula: '<Chi Num> 월 <Chi Num> 일 + 이에요',
    explain: 'To say a full date, state the month first, then the day, followed by 이에요 (is/are/am). Both month and day use Sino-Korean numbers. The structure mirrors how Korean reads dates: month then day, opposite to some Western formats.',
    ex1: '오늘은 칠월 십일일이에요. (Today is July 11th.)',
    ex2: '생일이 삼월 이십오일이에요. (My birthday is March 25th.)',
    exception: 'Remember: 6월 = 유월, 10월 = 시월 (irregular). When asking: 며칠이에요? (What date is it?) or 몇 월 며칠이에요? (What month and date is it?)'
  },
  {
    id: 'c_v10', tag: 'B1T2', type: 'vocab', group: 'months-seasons',
    title: 'Relative Time Words (시간 표현)',
    vocabData: [
      { kr: '어제', en: 'Yesterday' },
      { kr: '오늘', en: 'Today' },
      { kr: '내일', en: 'Tomorrow' },
      { kr: '매년', en: 'Every year' },
      { kr: '매달', en: 'Every month' },
      { kr: '매일', en: 'Every day' },
    ],
    vocabNote: 'These words do not need the time marker 에. They function as time adverbs on their own.\ne.g. 오늘 학교에 가요. (I go to school today.) 매일 운동해요. (I exercise every day.)'
  },
];
