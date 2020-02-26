import React from 'react';


const Form = () => {
  return (<div class="container"><form>
  <div class="form-group">
    <label for="formControlTextarea1">Write your pending</label>
    <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Add Pending stuff</button>
</form></div>)
}

export default Form;