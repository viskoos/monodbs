import React, {Component} from 'react'
import axios from 'axios'

class GetProduct extends Component{

    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`/api/product`)
            .then(res => {
                const products = res.data
                this.setState({products})
            })
    }

    render() {
        console.log(this.state.products)
        return(
            <div>
                <ul>
                    {(this.state.products && this.state.products.length > 0) ? (
                        this.state.products.map(product => <li>{product.name}</li>)
                    ) : (
                        <p>No products found</p>
                    )}
                </ul>
            </div>
        )
    }
}

export default GetProduct