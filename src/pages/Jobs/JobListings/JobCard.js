import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
    return (
        <div style={styles.card}>
            <h3>{job.jobTitle}</h3>
            <p>{job.jobDescription}</p>
            <p>{"€"+job.jobSalary}</p>
            <p>{job.jobLocation}</p>
            <p>{job.jobStartDate}</p>
            <p>{job.jobCategory}</p>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        jobDescription: PropTypes.string.isRequired,
        jobLocation: PropTypes.string.isRequired,
        jobSalary: PropTypes.string.isRequired,
        jobStartDate: PropTypes.string.isRequired,
        jobQualifications: PropTypes.string.isRequired,
        jobCategory: PropTypes.string.isRequired
        // Additional job details
        // Todo Add rest of class elements to here ->
        // and in interpolation
    }).isRequired
};

const styles = {
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px'
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        margin: '10px',
        width: '300px'
    }
};

export default JobCard;