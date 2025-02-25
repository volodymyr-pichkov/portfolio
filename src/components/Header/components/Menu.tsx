const Menu: React.FC = (): React.ReactElement => {
  return (
    <ul className="flex gap-12">
      <li>
        <a href="#">КВЕСТЫ</a>
      </li>
      <li>
        <a href="#">НОВИЧКАМ</a>
      </li>
      <li>
        <a href="#">ОТЗЫВЫ</a>
      </li>
      <li>
        <a href="#">АКЦИИ</a>
      </li>
      <li>
        <a href="#">КОНТАКТЫ</a>
      </li>
    </ul>
  );
};

export default Menu;
