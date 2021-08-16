function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
