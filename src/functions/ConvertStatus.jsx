export const ConvertStatus = (status, alias) => {
  if (status < 26) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 1;
    } else {
      status = 1;
    }
  } else if (status < 47) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 4;
    } else {
      status = "D4";
    }
  } else if (status < 67) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 6;
    } else {
      status = "D6";
    }
  } else if (status < 87) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 8;
    } else {
      status = "D8";
    }
  } else if (status < 107) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 10;
    } else {
      status = "D10";
    }
  } else if (status < 120) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 12;
    } else {
      status = "D12";
    }
  } else if (status < 130) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 13;
    } else {
      status = "D12+1";
    }
  } else if (status < 140) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 14;
    } else {
      status = "D12+2";
    }
  } else if (status < 150) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 15;
    } else {
      status = "D12+3";
    }
  } else if (status < 160) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 16;
    } else {
      status = "D12+4";
    }
  } else if (status < 170) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 17;
    } else {
      status = "D12+5";
    }
  } else if (status < 180) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 22;
    } else {
      status = "D12+10";
    }
  } else if (status < 190) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 27;
    } else {
      status = "D12+15";
    }
  } else if (status < 200) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 32;
    } else {
      status = "D12+20";
    }
  } else if (status < 210) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 37;
    } else {
      status = "D12+25";
    }
  } else if (status < 220) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 42;
    } else {
      status = "D12+30";
    }
  } else if (status < 230) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 47;
    } else {
      status = "D12+35";
    }
  } else if (status < 240) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 52;
    } else {
      status = "D12+40";
    }
  } else if (status < 250) {
    if (alias === "DEF" || alias === "SDEF") {
      status = 62;
    } else {
      status = "D12+50";
    }
  }

  return status;
};
