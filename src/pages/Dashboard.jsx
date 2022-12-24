import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from "../components/GoalForm";
import Spinner from '../components/Spinner';
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth); //get the user from the store (state-store in redux)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals);

  useEffect(() => {
    if(isError) {
      console.log(message);
    }else if(!user) {
      navigate('/login');      
    }else{
      dispatch(getGoals());
    }    
    //when the component dismounts
    return () => {
      dispatch(reset());
    }

  }, [user, navigate, isError, message, dispatch]);

  if(isLoading) {
    return <Spinner />
  }

  if(user) //doing this because when clicking the GoalSetter button it shows the dashbord for a split second just before navigating back to the login screen
  {   
    return (
      <>
        <section className="heading">
          <h3>Welcome {user && user.name}</h3>
          <p>Goals Dashboards</p>
        </section>
        <section>
          <GoalForm />
        </section>
        <section className="content">
          { goals.length > 0 ? (
            <div className="goals">
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal}/>
              ))}
            </div>
          ) : ( <h3>You have not set any goals!</h3>) }
        </section>
      </>
    )
  }
  
  return;
}

export default Dashboard;