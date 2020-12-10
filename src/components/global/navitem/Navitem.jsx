const Navitem = ({text, url = '#'}) => (
    <li>
        <a href={url}>{text}</a>
    </li>
)

export default Navitem