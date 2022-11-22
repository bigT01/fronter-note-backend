import { body } from 'express-validator';

export const loginValidation = [
    body('email', "не верный формат почты").isEmail(),
    body('password', "пароль должен быть больше 5").isLength({min: 5}),
];

export const registerValidation = [
    body('email', "не верный формат почты").isEmail(),
    body('password', "пароль должен быть больше 5").isLength({min: 5}),
    body('FullName', "укажите имя").isLength({min:3}),
    body('avatarURL', "не верная ссылка на аватарку").optional().isURL(),
];

export const postCreateValidation = [
    body('title', "введите заголовок статьи").isLength({min: 3}).isString(),
    body('text', "Введите текст статьи").isLength({min: 5}).isString(),
    body('tags', "неверный формат тэгов (укажите массив)").optional().isString(),
    body('imageURL', "не верная ссылка на изображния").optional().isString(),
];