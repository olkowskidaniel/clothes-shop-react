import {CartItemContainer, StyledImage, ItemDetails, SpanName, SpanPrice} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <StyledImage src={imageUrl} alt={`${name}`}/>
            <ItemDetails className="item-details">
                <SpanName className="name">{ name }</SpanName>
                <SpanPrice className="price">{ quantity } x ${price}</SpanPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;    