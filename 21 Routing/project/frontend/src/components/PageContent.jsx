import MainNavigation from './MainNavigation';
import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <>
      <MainNavigation />
      <div className={classes.content}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}

export default PageContent;
