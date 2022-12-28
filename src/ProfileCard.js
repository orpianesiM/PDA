function ProfileCard({title, handle, image}){ //3
    //function ProfileCard(props){ //matcheo values 2-
    //const title = props.title; 1-
    //const handle = props.handle; 1-
    //const { title, handle } = props; //its the same- 2-

    return (
        <div>   
            <img src={image} alt="pda logo"/>
            <div>Title is {title}</div> 
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;