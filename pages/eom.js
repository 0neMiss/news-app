export const EOM = ({employee}) =>{
    
    console.log(employee)
    return(
        <div className = 'page-container'>
            <div>
                <h1>Employee Of The Month</h1>
                
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext =>{
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/0neMiss/news-app/employeeOfTheMonth'
    )

    const employee = await apiResponse.json()
    console.log(employee)
    return{
        props:{
            employee
        }
        
    }
    
}

export default EOM;