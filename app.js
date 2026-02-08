/**
 * Welcome to California - Interactive Quiz App
 * Premium mobile-first experience
 */

// ========================================
// Data
// ========================================

const blocks = [
    { id: 'comfort', title: 'Комфорт & Границы', emoji: '🛋️', description: 'Чтобы я всё продумал' },
    { id: 'activities', title: 'Активности', emoji: '🎯', description: 'Что тебя зажигает' },
    { id: 'aesthetics', title: 'Эстетика & Подарки', emoji: '✨', description: 'Детали, которые важны' },
    { id: 'content', title: 'Контент & Блог', emoji: '📸', description: 'Для твоих историй' }
];

const questions = [
    {
        id: 'q1',
        block: 'comfort',
        text: 'Как тебе комфортнее засыпать?',
        type: 'single_choice',
        options: [
            { value: 'silence', label: 'В полной тишине', emoji: '🌙' },
            { value: 'noise', label: 'Можно с фоновым шумом', emoji: '🌊' },
            { value: 'music', label: 'Под музыку/подкаст', emoji: '🎧' }
        ],
        optional: false
    },
    {
        id: 'q2',
        block: 'comfort',
        text: 'Температура в комнате для сна?',
        type: 'emoji_scale',
        options: [
            { value: 'cold', emoji: '🥶', label: 'Прохладно' },
            { value: 'cool', emoji: '❄️', label: 'Свежо' },
            { value: 'normal', emoji: '😌', label: 'Умеренно' },
            { value: 'warm', emoji: '☀️', label: 'Тепло' }
        ],
        optional: false
    },
    {
        id: 'q3',
        block: 'comfort',
        text: 'Ты — жаворонок или сова?',
        type: 'single_choice',
        options: [
            { value: 'early', label: 'Встаю с солнцем', emoji: '🌅' },
            { value: 'flexible', label: 'По настроению', emoji: '🔄' },
            { value: 'late', label: 'Ночь — моё время', emoji: '🌃' }
        ],
        optional: false
    },
    {
        id: 'q4',
        block: 'comfort',
        text: 'Нужно ли тебе личное время в течение дня?',
        type: 'toggle',
        options: [
            { value: true, label: 'Да, иногда нужна пауза' },
            { value: false, label: 'Нет, я на волне 24/7' }
        ],
        optional: false
    },
    {
        id: 'q5',
        block: 'comfort',
        text: 'Есть ли продукты, которые ты не ешь?',
        type: 'multi_choice',
        options: [
            { value: 'none', label: 'Ем всё', emoji: '✅' },
            { value: 'seafood', label: 'Морепродукты', emoji: '🦐' },
            { value: 'meat', label: 'Мясо', emoji: '🥩' },
            { value: 'dairy', label: 'Молочное', emoji: '🧀' },
            { value: 'gluten', label: 'Глютен', emoji: '🍞' },
            { value: 'spicy', label: 'Острое', emoji: '🌶️' }
        ],
        optional: false
    },
    {
        id: 'q6',
        block: 'comfort',
        text: 'Кофе утром — must have?',
        type: 'single_choice',
        options: [
            { value: 'coffee_lover', label: 'Без кофе не человек', emoji: '☕' },
            { value: 'tea', label: 'Лучше чай', emoji: '🍵' },
            { value: 'matcha', label: 'Матча — мой выбор', emoji: '🍃' },
            { value: 'juice', label: 'Сок / смузи', emoji: '🥤' }
        ],
        optional: false
    },
    {
        id: 'q7',
        block: 'activities',
        text: 'Теннис в Калифорнии — как тебе идея?',
        type: 'emoji_scale',
        options: [
            { value: 'must', emoji: '🎾', label: 'Обязательно!' },
            { value: 'maybe', emoji: '🤔', label: 'Почему нет' },
            { value: 'watch', emoji: '👀', label: 'Лучше посмотрю' },
            { value: 'skip', emoji: '😅', label: 'Отдохну от него' }
        ],
        optional: false
    },
    {
        id: 'q8',
        block: 'activities',
        text: 'Хайкинг с видами на океан?',
        type: 'single_choice',
        options: [
            { value: 'easy', label: 'Лёгкий маршрут, больше фото', emoji: '📸' },
            { value: 'medium', label: 'Средний — challenge accepted', emoji: '🥾' },
            { value: 'hard', label: 'Сложный — я готова', emoji: '⛰️' },
            { value: 'skip', label: 'Лучше пляж', emoji: '🏖️' }
        ],
        optional: false
    },
    {
        id: 'q9',
        block: 'activities',
        text: 'Что звучит интереснее?',
        type: 'multi_choice',
        options: [
            { value: 'wine', label: 'Винодельни Напы', emoji: '🍷' },
            { value: 'surf', label: 'Сёрфинг (попробовать)', emoji: '🏄‍♀️' },
            { value: 'spa', label: 'SPA-день', emoji: '💆‍♀️' },
            { value: 'shopping', label: 'Шоппинг в LA', emoji: '🛍️' },
            { value: 'art', label: 'Галереи и музеи', emoji: '🎨' },
            { value: 'food', label: 'Food tour', emoji: '🍽️' }
        ],
        optional: false
    },
    {
        id: 'q10',
        block: 'activities',
        text: 'Вечер в городе — какой формат?',
        type: 'single_choice',
        options: [
            { value: 'fine_dining', label: 'Fine dining', emoji: '🥂' },
            { value: 'rooftop', label: 'Rooftop bar с видом', emoji: '🌃' },
            { value: 'cozy', label: 'Уютное место, без суеты', emoji: '🕯️' },
            { value: 'show', label: 'Шоу / концерт', emoji: '🎭' }
        ],
        optional: false
    },
    {
        id: 'q11',
        block: 'activities',
        text: 'Road trip SF → LA: что важнее?',
        type: 'single_choice',
        options: [
            { value: 'views', label: 'Максимум остановок и видов', emoji: '🛣️' },
            { value: 'balance', label: 'Баланс — и виды, и отдых', emoji: '⚖️' },
            { value: 'fast', label: 'Быстрее доехать, больше времени там', emoji: '🚗' }
        ],
        optional: false
    },
    {
        id: 'q12',
        block: 'activities',
        text: 'Насколько плотный график комфортен?',
        type: 'emoji_scale',
        options: [
            { value: 'packed', emoji: '📅', label: 'Максимум всего' },
            { value: 'balanced', emoji: '😊', label: 'Баланс' },
            { value: 'chill', emoji: '🧘‍♀️', label: 'Больше отдыха' },
            { value: 'spontaneous', emoji: '✨', label: 'По настроению' }
        ],
        optional: false
    },
    {
        id: 'q13',
        block: 'aesthetics',
        text: 'Цветы — какие ближе сейчас?',
        type: 'single_choice',
        options: [
            { value: 'peonies', label: 'Пионы — классика', emoji: '🌸' },
            { value: 'ohara', label: 'Охара — нежность', emoji: '🌹' },
            { value: 'hydrangea', label: 'Гортензии — объём', emoji: '💐' },
            { value: 'mix', label: 'Микс — удиви меня', emoji: '🎨' }
        ],
        optional: false
    },
    {
        id: 'q14',
        block: 'aesthetics',
        text: 'Украшения — что носишь чаще?',
        type: 'multi_choice',
        options: [
            { value: 'rings', label: 'Кольца', emoji: '💍' },
            { value: 'earrings', label: 'Серьги', emoji: '✨' },
            { value: 'bracelets', label: 'Браслеты', emoji: '📿' },
            { value: 'necklace', label: 'Цепочки/кулоны', emoji: '🔗' },
            { value: 'minimal', label: 'Минимализм', emoji: '🤍' }
        ],
        optional: false
    },
    {
        id: 'q15',
        block: 'aesthetics',
        text: 'Золото или серебро?',
        type: 'single_choice',
        options: [
            { value: 'gold', label: 'Золото / Gold', emoji: '🌟' },
            { value: 'silver', label: 'Серебро / Silver', emoji: '🌙' },
            { value: 'both', label: 'Миксую', emoji: '⚡' }
        ],
        optional: false
    },
    {
        id: 'q16',
        block: 'aesthetics',
        text: 'Какой подарок порадует больше?',
        type: 'single_choice',
        options: [
            { value: 'experience', label: 'Впечатление / Experience', emoji: '🎈' },
            { value: 'thing', label: 'Красивая вещь', emoji: '🎁' },
            { value: 'surprise', label: 'Сюрприз — не говорю', emoji: '🤫' }
        ],
        optional: false
    },
    {
        id: 'q17',
        block: 'aesthetics',
        text: 'Любимые фрукты?',
        type: 'multi_choice',
        options: [
            { value: 'mango', label: 'Манго', emoji: '🥭' },
            { value: 'berries', label: 'Ягоды', emoji: '🍓' },
            { value: 'citrus', label: 'Цитрусы', emoji: '🍊' },
            { value: 'tropical', label: 'Тропические', emoji: '🍍' },
            { value: 'grapes', label: 'Виноград', emoji: '🍇' }
        ],
        optional: true
    },
    {
        id: 'q18',
        block: 'aesthetics',
        text: 'Эстетика, которая откликается:',
        type: 'multi_choice',
        options: [
            { value: 'minimal', label: 'Минимализм', emoji: '⬜' },
            { value: 'coastal', label: 'Coastal / Пляжная', emoji: '🐚' },
            { value: 'moody', label: 'Moody / Атмосферная', emoji: '🌑' },
            { value: 'warm', label: 'Warm / Тёплые тона', emoji: '🧡' },
            { value: 'nature', label: 'Nature / Зелень', emoji: '🌿' }
        ],
        optional: false
    },
    {
        id: 'q19',
        block: 'content',
        text: 'Будешь снимать контент для блога?',
        type: 'single_choice',
        options: [
            { value: 'yes', label: 'Да, это важно', emoji: '📱' },
            { value: 'maybe', label: 'Иногда, если красиво', emoji: '📷' },
            { value: 'no', label: 'Хочу отдохнуть от этого', emoji: '😌' }
        ],
        optional: false
    },
    {
        id: 'q20',
        block: 'content',
        text: 'Нужны локации для съёмки MOOZ?',
        type: 'toggle',
        options: [
            { value: true, label: 'Да, хочу поснимать коллекцию' },
            { value: false, label: 'Нет, только личное' }
        ],
        optional: false
    },
    {
        id: 'q21',
        block: 'content',
        text: 'Какой контент хочется создать?',
        type: 'multi_choice',
        options: [
            { value: 'reels', label: 'Reels / Shorts', emoji: '🎬' },
            { value: 'photos', label: 'Фото для ленты', emoji: '🖼️' },
            { value: 'stories', label: 'Stories', emoji: '📲' },
            { value: 'vlog', label: 'Влог', emoji: '🎥' },
            { value: 'chill', label: 'Минимум, просто жить', emoji: '🌴' }
        ],
        optional: true
    },
    {
        id: 'q22',
        block: 'content',
        text: 'Помощь с фото/видео — нужна?',
        type: 'emoji_scale',
        options: [
            { value: 'yes', emoji: '🙋‍♂️', label: 'Буду рада' },
            { value: 'sometimes', emoji: '📸', label: 'Иногда' },
            { value: 'self', emoji: '🤳', label: 'Сама справлюсь' }
        ],
        optional: false
    },
    {
        id: 'q23',
        block: 'content',
        text: 'Golden hour съёмки — в приоритете?',
        type: 'single_choice',
        options: [
            { value: 'must', label: 'Обязательно ловим свет', emoji: '🌅' },
            { value: 'nice', label: 'Если получится', emoji: '😊' },
            { value: 'whatever', label: 'Не принципиально', emoji: '🤷‍♀️' }
        ],
        optional: false
    },
    {
        id: 'q24',
        block: 'content',
        text: 'Что-то ещё, что важно знать?',
        type: 'text',
        placeholder: 'Любые пожелания, мечты, детали...',
        optional: true
    }
];

const vibeProfiles = [
    {
        id: 'adventurer',
        title: 'California Adventurer',
        emoji: '🌊',
        description: 'Ты готова к приключениям, новым впечатлениям и активному отдыху. Океан, горы, дороги — всё это зовёт тебя.',
        visual: 'gradient-adventure',
        triggers: {
            activities: ['surf', 'wine', 'hard', 'medium'],
            schedule: ['packed', 'views'],
            tennis: ['must', 'maybe']
        }
    },
    {
        id: 'aesthete',
        title: 'California Aesthete',
        emoji: '✨',
        description: 'Для тебя важны детали, красота и атмосфера. Эстетика Калифорнии — это твой мудборд в реальности.',
        visual: 'gradient-aesthete',
        triggers: {
            content: ['yes'],
            mooz: [true],
            aesthetics: ['minimal', 'moody', 'coastal'],
            golden_hour: ['must']
        }
    },
    {
        id: 'soul',
        title: 'California Soul',
        emoji: '🌴',
        description: 'Ты ценишь моменты, а не суету. Калифорния для тебя — это тёплые вечера, уютные места и время вместе.',
        visual: 'gradient-soul',
        triggers: {
            evening: ['cozy'],
            schedule: ['chill', 'spontaneous', 'balanced'],
            activities: ['spa'],
            content: ['no', 'maybe']
        }
    }
];

// ========================================
// State
// ========================================

let currentQuestionIndex = 0;
let answers = {};
let currentBlock = null;

// ========================================
// DOM Elements
// ========================================

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const skipBtn = document.getElementById('skip-btn');
const nextBtn = document.getElementById('next-btn');
const finalBtn = document.getElementById('final-btn');
const quizContent = document.getElementById('quiz-content');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const blockTransition = document.getElementById('block-transition');

// ========================================
// Screen Management
// ========================================

function showScreen(screenId) {
    [welcomeScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// ========================================
// Question Rendering
// ========================================

function renderQuestion(question) {
    const block = blocks.find(b => b.id === question.block);

    let html = `
        <div class="question-container">
            <div class="question-block-indicator">
                <span>${block.emoji}</span>
                <span>${block.title}</span>
            </div>
            <h2 class="question-text">${question.text}</h2>
    `;

    if (question.optional) {
        html += `<p class="question-optional">необязательно</p>`;
    }

    if (question.type === 'multi_choice') {
        html += `<p class="question-hint">можно выбрать несколько</p>`;
    }

    html += renderQuestionOptions(question);
    html += `</div>`;

    quizContent.innerHTML = html;

    // Attach event listeners
    attachOptionListeners(question);

    // Restore previous answer if exists
    restoreAnswer(question);
}

function renderQuestionOptions(question) {
    const { type, options, placeholder } = question;

    switch (type) {
        case 'single_choice':
            return `
                <div class="options-grid">
                    ${options.map(opt => `
                        <div class="option-item" data-value="${opt.value}" data-type="single">
                            <span class="option-emoji">${opt.emoji || ''}</span>
                            <span class="option-label">${opt.label}</span>
                            <span class="option-check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span>
                        </div>
                    `).join('')}
                </div>
            `;

        case 'multi_choice':
            return `
                <div class="options-grid">
                    ${options.map(opt => `
                        <div class="option-item" data-value="${opt.value}" data-type="multi">
                            <span class="option-emoji">${opt.emoji || ''}</span>
                            <span class="option-label">${opt.label}</span>
                            <span class="option-check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span>
                        </div>
                    `).join('')}
                </div>
            `;

        case 'emoji_scale':
            return `
                <div class="emoji-scale">
                    ${options.map(opt => `
                        <div class="emoji-option" data-value="${opt.value}">
                            <span class="emoji">${opt.emoji}</span>
                            <span class="label">${opt.label}</span>
                        </div>
                    `).join('')}
                </div>
            `;

        case 'toggle':
            return `
                <div class="toggle-options">
                    ${options.map(opt => `
                        <div class="toggle-option" data-value="${opt.value}">
                            <span class="toggle-label">${opt.label}</span>
                            <span class="toggle-indicator"></span>
                        </div>
                    `).join('')}
                </div>
            `;

        case 'text':
            return `
                <div class="text-input-container">
                    <textarea
                        class="text-input"
                        placeholder="${placeholder || 'Напиши здесь...'}"
                        rows="4"
                    ></textarea>
                </div>
            `;

        default:
            return '';
    }
}

function attachOptionListeners(question) {
    const { type, id } = question;

    switch (type) {
        case 'single_choice':
            document.querySelectorAll('.option-item[data-type="single"]').forEach(item => {
                item.addEventListener('click', () => handleSingleChoice(item, id));
            });
            break;

        case 'multi_choice':
            document.querySelectorAll('.option-item[data-type="multi"]').forEach(item => {
                item.addEventListener('click', () => handleMultiChoice(item, id));
            });
            break;

        case 'emoji_scale':
            document.querySelectorAll('.emoji-option').forEach(item => {
                item.addEventListener('click', () => handleEmojiScale(item, id));
            });
            break;

        case 'toggle':
            document.querySelectorAll('.toggle-option').forEach(item => {
                item.addEventListener('click', () => handleToggle(item, id));
            });
            break;

        case 'text':
            const textarea = document.querySelector('.text-input');
            if (textarea) {
                textarea.addEventListener('input', (e) => handleTextInput(e.target.value, id, question.optional));
            }
            break;
    }
}

// ========================================
// Answer Handlers
// ========================================

function handleSingleChoice(item, questionId) {
    document.querySelectorAll('.option-item[data-type="single"]').forEach(opt => {
        opt.classList.remove('selected');
    });
    item.classList.add('selected');

    answers[questionId] = item.dataset.value;
    updateNextButton(true);

    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate(10);
}

function handleMultiChoice(item, questionId) {
    item.classList.toggle('selected');

    const selected = Array.from(document.querySelectorAll('.option-item[data-type="multi"].selected'))
        .map(opt => opt.dataset.value);

    // Handle "none" option
    if (item.dataset.value === 'none' && item.classList.contains('selected')) {
        document.querySelectorAll('.option-item[data-type="multi"]').forEach(opt => {
            if (opt.dataset.value !== 'none') opt.classList.remove('selected');
        });
        answers[questionId] = ['none'];
    } else if (selected.includes('none') && item.dataset.value !== 'none') {
        document.querySelector('.option-item[data-value="none"]')?.classList.remove('selected');
        answers[questionId] = selected.filter(v => v !== 'none');
    } else {
        answers[questionId] = selected;
    }

    updateNextButton(selected.length > 0);

    if (navigator.vibrate) navigator.vibrate(10);
}

function handleEmojiScale(item, questionId) {
    document.querySelectorAll('.emoji-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    item.classList.add('selected');

    answers[questionId] = item.dataset.value;
    updateNextButton(true);

    if (navigator.vibrate) navigator.vibrate(10);
}

function handleToggle(item, questionId) {
    document.querySelectorAll('.toggle-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    item.classList.add('selected');

    answers[questionId] = item.dataset.value === 'true';
    updateNextButton(true);

    if (navigator.vibrate) navigator.vibrate(10);
}

function handleTextInput(value, questionId, isOptional) {
    answers[questionId] = value;
    updateNextButton(isOptional || value.trim().length > 0);
}

function restoreAnswer(question) {
    const answer = answers[question.id];
    if (!answer) {
        updateNextButton(question.optional);
        return;
    }

    switch (question.type) {
        case 'single_choice':
            const singleOpt = document.querySelector(`.option-item[data-value="${answer}"]`);
            if (singleOpt) singleOpt.classList.add('selected');
            break;

        case 'multi_choice':
            if (Array.isArray(answer)) {
                answer.forEach(val => {
                    const opt = document.querySelector(`.option-item[data-value="${val}"]`);
                    if (opt) opt.classList.add('selected');
                });
            }
            break;

        case 'emoji_scale':
            const emojiOpt = document.querySelector(`.emoji-option[data-value="${answer}"]`);
            if (emojiOpt) emojiOpt.classList.add('selected');
            break;

        case 'toggle':
            const toggleOpt = document.querySelector(`.toggle-option[data-value="${answer}"]`);
            if (toggleOpt) toggleOpt.classList.add('selected');
            break;

        case 'text':
            const textarea = document.querySelector('.text-input');
            if (textarea) textarea.value = answer;
            break;
    }

    updateNextButton(true);
}

// ========================================
// Navigation
// ========================================

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function updateNextButton(enabled) {
    nextBtn.disabled = !enabled;

    // Update button text for last question
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.querySelector('span').textContent = 'Узнать результат';
    } else {
        nextBtn.querySelector('span').textContent = 'Дальше';
    }
}

function showBlockTransition(block) {
    const transitionEmoji = document.getElementById('transition-emoji');
    const transitionTitle = document.getElementById('transition-title');
    const transitionDescription = document.getElementById('transition-description');

    transitionEmoji.textContent = block.emoji;
    transitionTitle.textContent = block.title;
    transitionDescription.textContent = block.description;

    blockTransition.classList.add('active');

    return new Promise(resolve => {
        setTimeout(() => {
            blockTransition.classList.remove('active');
            resolve();
        }, 1500);
    });
}

async function goToQuestion(index) {
    if (index < 0 || index >= questions.length) return;

    const question = questions[index];
    const newBlock = blocks.find(b => b.id === question.block);

    // Show block transition if entering a new block
    if (currentBlock !== newBlock.id && index > 0) {
        await showBlockTransition(newBlock);
    }

    currentBlock = newBlock.id;
    currentQuestionIndex = index;

    renderQuestion(question);
    updateProgress();

    // Update back button visibility
    backBtn.style.visibility = index > 0 ? 'visible' : 'hidden';

    // Update skip button visibility
    skipBtn.style.visibility = question.optional ? 'visible' : 'hidden';
}

function goNext() {
    if (currentQuestionIndex < questions.length - 1) {
        goToQuestion(currentQuestionIndex + 1);
    } else {
        showResults();
    }
}

function goBack() {
    if (currentQuestionIndex > 0) {
        goToQuestion(currentQuestionIndex - 1);
    }
}

function skipQuestion() {
    const question = questions[currentQuestionIndex];
    if (question.optional) {
        goNext();
    }
}

// ========================================
// Results
// ========================================

function calculateVibeProfile() {
    const scores = {
        adventurer: 0,
        aesthete: 0,
        soul: 0
    };

    // Activity preferences
    const activities = answers['q9'] || [];
    if (activities.includes('surf') || activities.includes('wine')) scores.adventurer += 2;
    if (activities.includes('spa')) scores.soul += 2;
    if (activities.includes('art') || activities.includes('shopping')) scores.aesthete += 1;

    // Hiking preference
    const hiking = answers['q8'];
    if (hiking === 'hard' || hiking === 'medium') scores.adventurer += 2;
    if (hiking === 'easy') scores.aesthete += 1;
    if (hiking === 'skip') scores.soul += 1;

    // Tennis
    const tennis = answers['q7'];
    if (tennis === 'must') scores.adventurer += 2;
    if (tennis === 'skip') scores.soul += 1;

    // Evening preference
    const evening = answers['q10'];
    if (evening === 'rooftop' || evening === 'fine_dining') scores.aesthete += 1;
    if (evening === 'cozy') scores.soul += 2;
    if (evening === 'show') scores.adventurer += 1;

    // Schedule preference
    const schedule = answers['q12'];
    if (schedule === 'packed') scores.adventurer += 2;
    if (schedule === 'chill' || schedule === 'spontaneous') scores.soul += 2;
    if (schedule === 'balanced') scores.soul += 1;

    // Road trip style
    const roadtrip = answers['q11'];
    if (roadtrip === 'views') scores.adventurer += 2;
    if (roadtrip === 'balance') scores.soul += 1;

    // Content creation
    const content = answers['q19'];
    if (content === 'yes') scores.aesthete += 2;
    if (content === 'no') scores.soul += 2;

    // MOOZ shooting
    const mooz = answers['q20'];
    if (mooz === true) scores.aesthete += 2;

    // Golden hour
    const goldenHour = answers['q23'];
    if (goldenHour === 'must') scores.aesthete += 2;

    // Aesthetics
    const aesthetics = answers['q18'] || [];
    if (aesthetics.includes('minimal') || aesthetics.includes('moody')) scores.aesthete += 1;
    if (aesthetics.includes('coastal') || aesthetics.includes('nature')) scores.soul += 1;

    // Find the highest score
    const maxScore = Math.max(scores.adventurer, scores.aesthete, scores.soul);

    if (scores.adventurer === maxScore) return vibeProfiles[0];
    if (scores.aesthete === maxScore) return vibeProfiles[1];
    return vibeProfiles[2];
}

function showResults() {
    const profile = calculateVibeProfile();

    // Update result screen
    document.getElementById('profile-emoji').textContent = profile.emoji;
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-description').textContent = profile.description;

    const profileCard = document.getElementById('profile-card');
    profileCard.className = 'profile-card ' + profile.visual;

    showScreen('result-screen');

    // Trigger confetti
    setTimeout(() => createConfetti(), 300);

    // Save answers to localStorage
    saveAnswers(profile);
}

async function saveAnswers(profile) {
    const data = {
        timestamp: new Date().toISOString(),
        profile: profile.id,
        profileTitle: profile.title,
        answers: answers
    };

    // Save locally
    localStorage.setItem('california-quiz-answers', JSON.stringify(data));

    // Send to Formspree (replace YOUR_FORM_ID with actual ID)
    // Get your free form at https://formspree.io
    const FORMSPREE_ID = 'xeoogewj'; // Replace with your Formspree ID

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `🌴 California Quiz: ${profile.title}`,
                profile: profile.title,
                profile_emoji: profile.emoji,
                // Comfort
                sleep_comfort: answers['q1'],
                room_temp: answers['q2'],
                morning_person: answers['q3'],
                personal_time: answers['q4'],
                food_restrictions: Array.isArray(answers['q5']) ? answers['q5'].join(', ') : answers['q5'],
                morning_drink: answers['q6'],
                // Activities
                tennis: answers['q7'],
                hiking: answers['q8'],
                activities: Array.isArray(answers['q9']) ? answers['q9'].join(', ') : answers['q9'],
                evening: answers['q10'],
                roadtrip: answers['q11'],
                schedule: answers['q12'],
                // Aesthetics
                flowers: answers['q13'],
                jewelry: Array.isArray(answers['q14']) ? answers['q14'].join(', ') : answers['q14'],
                metal: answers['q15'],
                gift_type: answers['q16'],
                fruits: Array.isArray(answers['q17']) ? answers['q17'].join(', ') : answers['q17'],
                aesthetics: Array.isArray(answers['q18']) ? answers['q18'].join(', ') : answers['q18'],
                // Content
                content_creation: answers['q19'],
                mooz_shooting: answers['q20'],
                content_type: Array.isArray(answers['q21']) ? answers['q21'].join(', ') : answers['q21'],
                photo_help: answers['q22'],
                golden_hour: answers['q23'],
                additional_notes: answers['q24'] || ''
            })
        });

        if (response.ok) {
            console.log('Answers sent successfully!');
        }
    } catch (error) {
        console.log('Could not send to server, saved locally', error);
    }
}

// ========================================
// Confetti Animation
// ========================================

function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#e8c4a0', '#f472b6', '#4a9eff', '#fbbf24', '#a78bfa'];
    const emojis = ['✨', '🌴', '🌊', '🌸', '💫', '🎉'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

        if (Math.random() > 0.5) {
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.fontSize = (Math.random() * 16 + 12) + 'px';
        } else {
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 8 + 4) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        }

        confetti.style.animation = `confetti-fall ${confetti.style.animationDuration} ${confetti.style.animationDelay} ease-out forwards`;
        container.appendChild(confetti);
    }

    // Add keyframes dynamically
    if (!document.getElementById('confetti-keyframes')) {
        const style = document.createElement('style');
        style.id = 'confetti-keyframes';
        style.textContent = `
            @keyframes confetti-fall {
                0% {
                    opacity: 1;
                    transform: translateY(-10vh) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: translateY(100vh) rotate(720deg);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Cleanup after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

// ========================================
// Event Listeners
// ========================================

startBtn.addEventListener('click', () => {
    showScreen('quiz-screen');
    goToQuestion(0);
});

backBtn.addEventListener('click', goBack);
skipBtn.addEventListener('click', skipQuestion);
nextBtn.addEventListener('click', goNext);

finalBtn.addEventListener('click', () => {
    // Could redirect to a "thank you" page or show a message
    alert('See you soon in California! 🌴');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizScreen.classList.contains('active')) {
        if (e.key === 'Enter' && !nextBtn.disabled) {
            goNext();
        } else if (e.key === 'Backspace' && currentQuestionIndex > 0) {
            e.preventDefault();
            goBack();
        }
    }
});

// Swipe navigation (mobile)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 100;
    const diff = touchStartX - touchEndX;

    if (quizScreen.classList.contains('active')) {
        if (diff > threshold && !nextBtn.disabled) {
            // Swipe left - go next
            goNext();
        } else if (diff < -threshold && currentQuestionIndex > 0) {
            // Swipe right - go back
            goBack();
        }
    }
}

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Show welcome screen
    showScreen('welcome-screen');

    // Add entrance animation
    document.body.classList.add('loaded');
});
