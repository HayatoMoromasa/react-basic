const Languages = [
    'Javascript',
    'Typescript',
    'Ruby',
    'PHP',
    'Go'
];

export const getLanguages = () => {// 1) 追加 ※実行されて1秒経つとLanguagesを返す関数
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Languages);
        },1000);
    });
};
