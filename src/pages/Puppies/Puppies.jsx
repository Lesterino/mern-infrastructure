import * as usersService from '../../utilities/users-service'

const AllPuppiesPage = (props) => {
    async function handleCheckToken() {
        const expDate = await usersService.checkToken();
        console.log(expDate);
    }
  return (
    <>
      <h1>AllPuppiesPage</h1>
      <button onClick={handleCheckToken}>Token Check</button>
    </>
  );
};

export default AllPuppiesPage;
