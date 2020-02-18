import React from "react";
import BasicPageComp from "../../BasicPageComp";
import Title from "../../Title";
import "../../../css/Project.css";

const JavascriptPageList = () => {
  const javascriptValue = [
    {
      hyperLink: "/development/javascript/2",
      projectName: "Function(2)",
      explanation: "자바 스크립트의 함수에 대한 고촬",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACUCAMAAAD70yGHAAAAmVBMVEX44BkAAAD74xn+5Rr/6Brq0xfu1xjArhOhkRD/6Ro/OQZWTghqYAr/7BrItRPizRb03BhPSAbKvxXPuxRGPwWunRHZxBVxZgqzohGWhw+PgQ7OuhRhVwh3bAt/cwtUTAcODACGegwsJwMgHQK7qBIuKQPFshOllA+Ziw5AOgY1MAUUEQDdyxYaGQENCgAZFQEmIQO3rBKooxGkaJRrAAAGdUlEQVR4nO2ba3uiPBCGIQEVrJWuVWvrobaeqrbrvv//x71aMwEPCQQhS/d67m8FSpLHyWQyGRwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwtmeB1koONdu8pqPW67J/8MrO+u2KVR8m3odn6CrTLmBUHgeV6QsAH2fWF/+crIbDByXfeudm6U3myzv159W+Ws0x1NHj/CMFwv49625/sL4ePD3WpxMTQLnZq6B9Zn8rHj5U274qp69w+uZJAQNb46X9k2Vm9JbfeSTXt34uq6VmkPwJ9cN03U/Ty0Owb+Qg0/nzTMtp+ldsgvZgKwE+2UoroNq/OtthbNjs6aZT3q0PJqaHAjzUEhCwh7joX72rirpKib1/heWCugsazwsWh1El3ckhOrXYKtTtyPQtbAR7KJnr8nOYjD39sGCdsroK2M8HvR5u8rwgVTcbNZgqjN/XunBSzLoosP1+2e8YZ4YGHRq9IPPbs2PEZ368X36CCq+1YPbn2P6OFU4aIYLRlP1kTlXVqMrpoM64jb65JE3Td864IlevisErVjXdSITFHhNflIZ8gaGFcg22mS3+nym4abJipZ6syWqKxOXVJoJgOW0Gyask5dwQs9QqLu3WHvlugi6/S/tyUqHx4bfN2qWmyRqZrlAOjFlzzSexLbIHeVPxvG3o+vGKtEpZW4k7cFU3zRYF85udlWPDI2mv/8zlXwIORjvaSq4X3uBUtY/Egl6kI0YSukCijcqKsVC4TX3V2EsTrSRXWY9/SZuD6K8hkrG+ntgkTdtXO93hyapDvNboNRZqBnMugMou5fHU0TNzb1XAuWSPsowpd42bC2o6oJf3SnmXsyJGkULqrjeNukDxj6OXwAbVOHKaI+Gs20/Ei9tHv7SCjfNxJVuVCFp1kbPvuduGn0w4k3pIk6syuqjPy1M5uLleDdaMA1X8H5LGRRIiPido13ApS7SLPUnW/65nxwGo7WhweUcSmrG0HCBxiL2qJUmjKkojh12rISqDLh+NZaH+6tSPqyOsW82S6HqIzxVm2Q9nOwtnBfbrNn5biqmcXdcFr+X0rrEJepJANRve5g/CZN/FM5BpnbPPiI51XZQUAkpt1E+xQXnt79U5aorft5junfChO+WHs82Uw+WHa4SqI2tU9xyg/8Z+LvmJKL99cSkYKJqI/yv9bLSPd/vJ5ooTQnJqAUlT4FnUtUNmsoOMvAcbaKB+y+GuwwYlHH9Zo2wOXspfFmTdRslppn+mdIqHzTWswT96Ym60jCUve6av7xWL5gS1RyNg/6hYqiWZPcWbYdFfeT2n+YZQBPRNVsCqVR2BGViSHpt8Uercwmm/8sonKnkbzR8AyH22o5vwbyvFQZm0QfUvg/vld6sMoo2NAH/1PxlMk+L4OoweItcXno50lUs8CjfG/qccq6bSX6lxGoNtUo3WOxCRVK2X2zmeU+UuHCCyizVDKfaqeaglN7T9r2xFIyLDhLNYmvjZz8A65aQoX5X2JQuohkKx56NrKlqKaCnpCirl9auYdQPVEdJmKqte4ZKlMp+uCMsig3nE8doCR1mqjWktQBpak0C3tALrXoTh1FnWxvrNOi1TYt8/9m6zhFlqCpzned+GxQ1encHET97JrGUZcI712Zgz85B+fKDG5Au0jTaopU9qt2v4gKZ1G0WJ0jarlbWipHJ7KRm8JjvHC3uLmO6kDKZLNfTOH4IgCfKzymzFCvijbUSJ9Zyo7oYHXKfhw+0PfJp2O54gOSosaYVVR7BWrMp8OGqxsOWfe/rG7Zf5qo9qv+HI+86rXg2KMYdW4rcs6B6GJfIapMB9ub/k582HCZkuSy6H9R4a9+xFT7undOKjUd5/h3mzYZ1lZ/5xCrftEUP/utWfyJRRkfUhREnJh56I/Go4Q9+qPxeDSkBPW7reD/G5mrOp8gEdlwWOHJH5fYHlF+8mNUYHM7MiV5uunw+vJydVcpJ65e0Iv6WfoxyjnCJJennSVvpKmzrALM6aeLWszXRUbd8g+J3vX51+mi0tG8vMk2vDNeU6nr86WoX/PhLGfx6y0wP3SHV75APYRU6g1sdWCc+9tf3yRmeXS80ms7wV/xX6zduHo67HW6FV74T7ks1VBUb1iDqbKRP8BOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8G/xP9tTTDqwQ3T+AAAAAElFTkSuQmCC"
    },
    {
      hyperLink: "/development/javascript/1",
      projectName: "Function(1)",
      explanation: "자바 스크립트의 함수에 대한 고촬",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "data:image/png;base64,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"
    }
  ];
  return (
    <div className="projectContainer">
      <Title title="< JAVASCRIPT />" />
      <div className="__listContainer">
        {javascriptValue.map((value, index) => {
          return (
            <BasicPageComp
              hyperLink={value.hyperLink}
              projectName={value.projectName}
              explanation={value.explanation}
              addEx={value.addEx}
              days={value.days}
              src={value.src}
              alt={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JavascriptPageList;
