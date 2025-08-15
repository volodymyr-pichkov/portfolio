import sklepImg from "@/assets/images/sklep.webp";
import manyakImg from "@/assets/images/manyak.webp";
import ritualImg from "@/assets/images/ritual.webp";
import mars2056Img from "@/assets/images/mars-2056.webp";
import mansionImg from "@/assets/images/mansion.webp";
import hizhinaImg from "@/assets/images/hizhina.webp";
import experimentImg from "@/assets/images/experiment.webp";
import metro2033Img from "@/assets/images/metro-2033.webp";
import cherdakImg from "@/assets/images/cherdak.webp";

export interface QuestType {
  id: string;
  title: string;
  genre: string;
  duration: string;
  players: string;
  difficulty: string;
  description: string;
  image: string;
}

export const cards: QuestType[] = [
  {
    id: "sklep",
    title: "Склеп",
    genre: "horrors",
    duration: "60 минут",
    players: "2-5 чел",
    difficulty: "сложный",
    description:
      "Исследуйте древний склеп, где каждый шаг может привести к неожиданной встрече с тем, что скрывается в темноте.",
    image: sklepImg,
  },
  {
    id: "manyak",
    title: "Маньяк",
    genre: "thriller",
    duration: "75 минут",
    players: "3-6 чел",
    difficulty: "средний",
    description:
      "Вас ждёт игра на выживание с хитрым и опасным преследователем, способным изменить ход событий в любой момент.",
    image: manyakImg,
  },
  {
    id: "ritual",
    title: "Ритуал",
    genre: "mysticism",
    duration: "50 минут",
    players: "3-5 чел",
    difficulty: "легкий",
    description:
      "Раскройте древний ритуал, который открывает двери в иные измерения и изменяет восприятие реальности.",
    image: ritualImg,
  },
  {
    id: "mars-2056",
    title: "Марс-2056",
    genre: "sciFi",
    duration: "90 минут",
    players: "2-4 чел",
    difficulty: "легкий",
    description:
      "Отправьтесь на Марс будущего, где технологии и опасности сосуществуют на грани возможного и фантастического.",
    image: mars2056Img,
  },
  {
    id: "mansion",
    title: "Тайны старого особняка",
    genre: "detective",
    duration: "80 минут",
    players: "2-5 чел",
    difficulty: "легкий",
    description:
      "Распутайте сеть интриг и загадок в старом особняке, где каждая комната хранит свою тайну.",
    image: mansionImg,
  },
  {
    id: "hizhina",
    title: "Хижина в лесу",
    genre: "horrors",
    duration: "70 минут",
    players: "4-7 чел",
    difficulty: "средний",
    description:
      "Затерянная в лесу хижина таит в себе жуткие тайны, которые могут навсегда изменить ваше представление о страхе.",
    image: hizhinaImg,
  },
  {
    id: "experiment",
    title: "Фатальный эксперимент",
    genre: "sciFi",
    duration: "85 минут",
    players: "5-8 чел",
    difficulty: "сложный",
    description:
      "Опасный эксперимент выходит из-под контроля — спасите команду и предотвратите катастрофу мирового масштаба.",
    image: experimentImg,
  },
  {
    id: "metro-2033",
    title: "Метро 2033",
    genre: "postApocalypse",
    duration: "90 минут",
    players: "6-8 чел",
    difficulty: "средний",
    description:
      "Выживайте в мрачных туннелях метро после глобальной катастрофы, сражаясь с мутантами и теми, кто остался человеком.",
    image: metro2033Img,
  },
  {
    id: "cherdak",
    title: "Старый чердак",
    genre: "horrors",
    duration: "45 минут",
    players: "2-3 чел",
    difficulty: "легкий",
    description:
      "Исследуйте заброшенный чердак, где прошлое оживает и заставляет столкнуться с неизведанным ужасом.",
    image: cherdakImg,
  },
];
