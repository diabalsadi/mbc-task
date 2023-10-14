// Components
import PageTitle from '../../components/PageTitle';
// Styles
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <PageTitle title={'Welcome to the Website'} />
      <div className={styles.container}>
        <div>
          My name is Diab Al Sadi. I'm a front end developer in Optimum
          Partners. I'm currently working with{' '}
          <span>
            <a
              className={styles.link}
              href='https://www.forbes.com'
              rel='noreferrer'
              target='_blank'
            >
              Forbes.
            </a>
          </span>
        </div>
        <div>
          I'm Working on several projects in the company as Backend and
          Frontend, almost all the projects are based in React (Storybook,
          Gatsby and Next).
        </div>
        <div>
          I'm very exited and happy that you give me this wonderful opportunity
        </div>
      </div>
    </>
  );
};

export default Home;
