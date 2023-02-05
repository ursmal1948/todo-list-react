import "./style.css"

const Form = ({ title }) => (
    <form className="form">
        <input placeholder="Co jest do zrobienia?" className="form__field" />
        <button className="form__button">{title}</button>
    </form>
)

export default Form;