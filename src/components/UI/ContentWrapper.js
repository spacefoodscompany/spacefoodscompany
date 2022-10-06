import './ContentWrapper.css';

const ContentWrapper = (props) => {

    const className = 'content-wrapper ' + props.className;

    return (<div className={className}>
        {props.children}
        </div>);
}

export default ContentWrapper;