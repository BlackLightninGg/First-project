import s from './NavigationBar.module.css';
const NavigationBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>Profile</div>
      <div className={`${s.item} ${s.active}`}>Messages</div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
      <div className={s.item}>Settings</div>
    </nav>
  );
};



export default NavigationBar;