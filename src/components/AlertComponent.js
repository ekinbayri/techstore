import Alert from 'react-bootstrap/Alert';

function AlertComponent({variant,heading,first,second}) {
  return (
    <Alert variant= {variant}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>
        {first}
      </p>
      <hr />
      <p className="mb-0">
       {second}
      </p>
    </Alert>
  );
}

export default AlertComponent;