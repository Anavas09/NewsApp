import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            category: 'general'
        }
    }

    handleOnChange = e => {
        this.setState({
            category: e.target.value
        }, () => {
            this.props.fetchNews(this.state.category)
        })
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select
                                onChange={this.handleOnChange}
                            >
                                <option value="general">General</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="business">Negocios</option>
                                <option value="health">Salud</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    fetchNews: PropTypes.func.isRequired,
};

export default Form;