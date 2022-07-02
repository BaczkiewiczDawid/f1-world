import { useState } from "react";
import styled from "styled-components";
import verstappen from "assets/images/verstappen.png";
import perez from "assets/iamges/perez.png";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  div {
    background-color: ${({ theme }) => theme.colors.red};
    width: 80vw;
    height: 0.3rem;
  }
`;

const DriversList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95vw;
  margin: 0 auto;
  justify-content: center;

  @media screen and (min-width: 1080px) {
    width: 83vw;
    justify-content: flex-start;
    margin-top: 6rem;
  }
`;

const Driver = styled.div`
  background-color: grey;
  margin-top: 1rem;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
  }

  h2 {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;

    &:nth-child(even) {
      margin-left: 2rem;
    }
  }
`;

const Drivers = () => {
    type DriversType =
      | {
          code: string;
          dateOfBirth: string;
          driverId: string;
          familyName: string;
          givenName: string;
          nationality: string;
          permamentNumber: string;
          url: string;
        }
      | undefined;

    const [drivers, setDrivers] = useState<DriversType[]>([]);

    fetch("http://ergast.com/api/f1/current/drivers.json", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setDrivers(result.MRData.DriverTable.Drivers);
        console.log(result.MRData.DriverTable.Drivers);
      })
      .catch((error) => console.log("error", error));

  return (
    <>
      <Header>
        <h1>2022 Drivers</h1>
        <div></div>
      </Header>
      <DriversList>
        {drivers.map((driver) => (
          <Driver>
            <img src={driver?.driverId} alt="" />
            <h2>
              {driver?.givenName} {driver?.familyName}
            </h2>
          </Driver>
        ))}
      </DriversList>
    </>
  );
};

export default Drivers;
