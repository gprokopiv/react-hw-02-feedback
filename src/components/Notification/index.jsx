import PropTypes from 'prop-types';

function Notification({message}) {
    return (
        <section>
            <p>{message}</p>
        </section>
    );
}

Section.propTypes = {
    message: PropTypes.string.isRequired,

};
export default Notification;