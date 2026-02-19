import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';  

function PhoneNumberInput() {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        country={"us"}           // default country
        value={phone}
        onChange={setPhone}      // updates phone state
        enableSearch={true}      // allows searching by country name
        masks={{ us: "(...) ...-...." }} // optional mask
      />
      <p>Full number: {phone}</p>
    </div>
  );
}

export default PhoneNumberInput;
