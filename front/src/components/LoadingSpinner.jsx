import { GridLoader } from "react-spinners";

const LoadingSpinner = () => {
    return <div style={{ margin: 'auto', minHeight: '50vh', display: 'flex', alignItems: 'center', flexDirection:'column', justifyContent:'center', gap: '.5em' }}>
        <GridLoader color="#36d7b7" />
        <label>Loading...</label>
    </div>
};

export default LoadingSpinner;