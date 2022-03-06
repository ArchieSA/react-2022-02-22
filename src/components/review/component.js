import { Rate } from "../rate/component"

export const Review = ({ name, text, rating}) => {
    return (
        <div>
            <div className="" >
                {name} 
                <div> 
                <Rate value={rating} />
                </div>
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}