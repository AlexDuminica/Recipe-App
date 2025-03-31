import { Button, Card } from "react-bootstrap"



export default function RecipeCard (props) {
    return (
    
        <Card className="d-flex justify-content-between align-items center">
            <Card.Img variant ="top" src ={props.imgSrc}/>
            <Card.Body>
                <Card.Title className="fw-bold">{props.title}</Card.Title>
                <Card.Text>
                   Check out this recipe below:
                </Card.Text>
                <Button variant = "warning">Go to recipe</Button>
            </Card.Body>
        </Card>

    )
}