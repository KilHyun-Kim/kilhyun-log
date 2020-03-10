import React from "react";
import MainSlider from "./MainSlider";
import WorkroomImage from "../image/workroom8363.png";
import MaydayImage from "../image/smilemaydayicon.png";
import OtherprojectImage from "../image/otherproject.png";
import PromiseElection from "../image/koreamap (1).jpg";
// import WhiteImage from "../image/WhiteImage";
const MainSliderList = () => {
  const values = [
    {
      title: "Project",
      topic1: "MAYDAY",
      _src1: MaydayImage,
      _link1: "/project/mayday",
      alt1: "mayday",
      topic2: "Workroom8363",
      _src2: WorkroomImage,
      _link2: "/project/workroom8363",
      alt2: "workroom8363",
      topic3: "AlgoPPobja",
      _src3: PromiseElection,
      _link3: "/project/algoppobja",
      alt3: "other",
      _src4: OtherprojectImage,
      _link4: "/project",
      id: "#circle"
    },
    {
      title: "Development",
      topic1: "JavaScript",
      _src1:
        "data:image/png;base64,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",
      _link1: "/development/javascript",
      alt1: "JavaScript",
      topic2: "TypeScript",
      _src2:
        "https://pbs.twimg.com/profile_images/1149708719178993664/3Hb8W4aX_400x400.png",
      _link2: "/development/typescript",
      alt2: "TypeScript",
      topic3: "React",
      _src3: "https://hackernoon.com/hn-images/1*To2H39eauxaeYxYMtV1afQ.png",
      _link3: "/development/react",
      alt3: "React",
      topic4: "SASS",
      _src4:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAaVBMVEX////PZJrNW5XOYZjOXpfNWpXMV5P//f778/f9+fv89vnRap724uzai7L35+/Sb6HUdqXms8zhosHw0eDXgazz2ubkq8flsMrrwtb57fPsxdjVeqjouM/03unfm7ztytvckrbYha7gn790t179AAAUD0lEQVR4nN1dCZeqOhLWJGwioLIIooj+/x/52AJVSUBAhL6v5pw5M7e7WYpav1qy261F5tG/xdElz4O0JCfPo3PsHw+rPcCmdHxeHU/XNY0QxmhHjBFN0/VTFodbP+IvKXleUlK8OqX7XqIlK9Lr/5IPbpzvteL1+98eM4Ll/taPvCgZfuQVn3/U67fEyP5y3PrJFyLDz9nY7y+xIfg/CEOY0akCAImS0z9uGY6R/Q0DGi447tbvMZsOt4CRWSogEGPXrd9lHh3f+0UYUBEJkq3fZzJZhQh8qwOI2P4fs41JYQUWE4GGKLtv/VoTKMz38xzhB9L+GSb4r2WVABD5J5hgxOl0JQBZ04e/ZX/fJhzi0xQOVHmizuxT6jR0Ou11fSChovYfDxQOd280B4qMSN+neRT7rnmwLKO5hGWZZhhHRWLdcyX22vQVP5A1mgOU6fvgHR9Nq/diB/fuUE11ORKv+E7TyBipBcX72/n1YRqfL2nGgSYbV+r9VZzpmSo/mvj8hAVRaI6+qhE6MmPJ+YfvMZ/C1wgZKBjg3JMR3x9fOiWSIPSr0Gbk5p8DopoBc65uRaI+kD/nH61o/zEiYlo6jwEV3QRPyfLlnn4RenqirEoioNnvx1QVwPcQxMz+U1bRdfRPgR1J4/FGsIfuWNLYH4KVrOunxIDRPPxKBBp6IU7/oawhPA2rASX2e6HINkS8/jMGwboMRwSUeNfFkB8jgPei6VLX/Y4+CEHBgfPXZgDQGd6NegteeTZZ0aAQLM2B3e6BOP4XHMNRCt4QEXthDux2iY3usH0CHQ/GhWwfLc2BQvBSdMuteWDm+hAH6PsXGDg2ilvz4OENxASUOT8qkTqQBxvbgyE9oCT9WToT/BkeWJcBPWD27yAeZA829Y3mq98fUHZZ3hR2d/YgDzaMkdwBU0CCn/ZKuPDOLPvlrQYp7Af/2f7HSKevQX5vljPdekNDSvIfqkFFbygHmwFJd62HA2sUhIUQaaMqfNTLAi3/vad6QDGgp5/fT0m9PpGtUgG8IJN4WeGOimfoYwFx1ghXDtAzbmQOLj2KQPV1LPQNoQf2FvWFPhYwe53+SQNZxE2ig2uPImjOEnDpCHqib7AFqnzvYYG+Vt3POiEw0VuJ84CeakWg+mqWCWGJW/QkPdQpArNXi1MSzHv71yGpROZeGSCzdL0M/oW+Alk9OMAWuXuQtaxhQXchXV89Ts6UeAHJ13sCF38EEq1365piNQtWFEfsEzawBq7SHq6qkTl+hNWdgnFS9oWtGaZFWBBpunZsEKk0YU1bINlD+ljx5iWFKk1gwYoJy014Am11g6jSBOqtaJNEFtB07YRRlMPqKfYrDtrdpKa8taf8TJU9ZLf1HkDyy+s36b4V1oC817v/WWLB6rCBq9KE03pJwlu8/6rGuKZcIQbrgReHQG7QXT1PUInBeprwsMUvQPdrRwZKa7CeW7xL5X26wQjPQWUQVwrVzZcEXG3BAlW+uFaAcpM7wDdhwc6Tg4N1vLPryIVdyp5r3Fqgo4wkr2INDleqsEPbjPhe5SdZocZn3DwFhM3s9T1CSYpsiY2M1Z+z5VY9EUXSbdrwDgpVGGkRH7o+a0+B4asnoki2UQeaL4skG5m5h/ocH2rG6qk4ut0I2102B2OLSmVbMZv44G7kqbt8iLfdvEqueKKx0brDSrhtvA8x4xdTd31SLVu9otSRXFcZHyBVABzz4lHYp/nMezdFEG+LqKAlW3og6oz+44xV3zB4fuBaOdC8V4zyNjf8acPnCJIfaULbQ9NQSskpcnvYYJhunPUOttcs3CYo6EjBgwmA7rGp0lKmpZdncoBaYR1M/3552frQziyqnbYfZJUfa5K/89tSdbn+zguyy/Ua367X6O2ktv5pZVwhQPMNQcHjkhbI7rzveIAhkHInImPlmkQ2uC6wYRp9zZUBy48KHjNd1/fp5evg0pEedWKskkhQ2ChixJs/D3m39ZbHBSu/jSzkysLUjMmIJq8GomSf+/OFOMQzx2y8I1PTQ4qVpw+WPqZsxynshu08vwJNM+xlvw+yZSQnmF7v9cfuBiHUe/tfpkaGENPQrw2CDKzPaX0wng4dZkPx/nsvvy1QQhPqwzT4/oqSMsxsxEvuwZ7J246q/blsbweRvxA6IOzKWAL/tcXPNx9GssL48vK4j2TVIqwiZoie4UT9t45+XNDtqFJLAfVhC7BW8gxfL+Q5HN3QL/7jHpM5VwrfJ70IrwrSdFv+yEKBeAFVKFRZjhC2zOKslw58LZWbhAVzMCW07ydZEJZg7Vzy9Q/PcsWPqy+DvUgWQdswjxEqf3KpQzAHC/URPyVBOK3fLs5JBHXEVzwKnnGpkthLjBG2wzdd4WtIm/MEOVlsXYopB4tbLf0Wpgck82wJj7pcPegmBkrrN0g2JIatovMX23YWrJBnkjZsM2Zs4QqwPPAtmu8FeWBI1eelWxDCe+68sviDFQ/xZ5bsktzAtuBjJhLus2QV/Phm1UkUjGjD+iu2bYvOfy/Sop9Kyp3o1/gMp8cL4OpkaEdqIjyDmMLK/SLL1shlu7gME8wcV9eGxgGEkFUadpbEYOlVYtKw+yJMiKVWi/5ET7RKYrmHswiAKHIA8R2dl2fCwVHUtXsFwSeDv2k012JRtzSGnhauUUnT3vTLpmW5+XA/NM7/EuyywAM+Y6GZEEZZup9T3v3wVdR860Gce5RBGq/ECRNvFyk4AzIcffFKnYIJ8w3vtafy0NcHLAVqGBvgP9aS3bHj7Q/O7JA/HXFmZmYXwcgTncuyOjUXHaPAA7cRg2rirzOec2DwT+RLw67Mm4XYvZFIUS2Pj7faoGvq6EvukEOOj1fESInPgViK/KBsfZQWI1E6I2TEikBeVSJar/lQ88CSoBwEIoVcDKrAEARLP1k2KjcR0+kTpzG8BuVtS7U9V+sCfy2v8/4Qy2nho0ozj5Bfv+joM96yZXxNQ4hR5N3JUW3WpCygouYl2SXr3q8DyngUqzfOGkRTTDFnYLqPML7H16j4L//hzoG35Y76aS2kJsrA2kjLqAMA5eQih4u1IwiYWyiHK0obWyA4CQlCEp7zk7dnJTpfNgKQIlnx0iw+TjXt8uLEKQflGAH8a62Ns8xazG3Tz9Pshj9OEx8VJgCUgQn/Ux4etSgyDCk7QbAeUWArzkosMlaNepk/LaYsMh2BCXstG8dJ44YYCIY1m7fzLsVTMuJBs8DHrYuwCKxT5fYuaX7aldkx2FKLS/j2enr/mq9IvPc0JyLrAzmNsT5+gPJE6L+59+NNTAC05AFQmS2DFZJN8sxdodY9ANwkVbIqidMhBnA2sGm9L+EcJ/kQD5KALyo0vQBvwwtoVYYAsoE6WvZ18NOG8K6E5+hjsihzJlk2SR+oFg1GZW4uZsow3xB2BsMw8MxVoeQY6KGusN12Jp/CmztopdiEQ6IYu0zxE3Lyrzn9dsWMpF+nJ2BDxP7wLiUy+K87Iq/KXWF3wS/WpBxTH0dkUkOgG4iiwLye0sPhbss5EuplEHOiDkzh485NBAly6MJPJFwKBJA5UAt/hVrqxa1su6zZakTRIzftNDjjKhoatVEwbqp2HITyHIRKIbXbHzVGnp++AiE15nPW6YJF9hWzQIULTJ3o7rtukphJQa5/u2avk3S4qjapdvAQF85TBZYrOIP2TlBmQhElysSfcOOB7B1XDDleFyCX8iCgi5+oHPgheV4C3CxE8ikxk3URv7B2wZbxqDhVqHrLHP7WRTSXrTzxl6Gm8A/wDW3JGmNBYOnVHTLYhnt/QXs1CHDL5IteUoNMTLI+q4zEwBInpxh/Y5fjhG28p5i5VHRJJbDJlo0ZIThegM2aWEo7ZIKok9Y9mP1H9dAcXkNUhQ5WbAGilmWmVPZSdNO7eMvguAntJOogzqmLd57Cm7KgYoIVo6N6sAHGLSKiKrQgmNmIAUTSxRU1il2SIcZrR3dRJVmruGRidT0RUPKSCcYTOQNKXhn8vwg/llWBc4hH0FDaRVxNXikainjX+G0FT8696XvMhQSCOX6AOZA+kc/GqLCoCg0YUtgq/kCo+QW3WsiawFkAYITxOE/bZ04mA7JH7CWxr2H23dqZsECho4hSDJDa0IHbPw2xDPWjyKe2cRawvLWLUzrJDk5zUzYZXbGkrR0tB/bVTBK057hQJlm5Vko4OiJoPBQESQzchgVFpNK6UTrlkAKjyTbmlGxj5WhGkYvVMRwsnWNVkPq+WJO98ZxQLObg/W349ThDS8PemdpJ/UOHxqmwGci8jDqDFAR1lOuoCCbNivBAmVsQJuZi/fzcNTBVVf7p4uppK1wS5ZXHkSUVBfdnzksXmANsc13J3+f1D/jqAdmiQUHA6VJTvKlBpa6Ja2JXZY3SzupHdYUvyrLue8dKkK8kaSUdRwr51yZS6RRtD2Pgx81bNwFBd8+pnaW1BOqTlcHNxbP74I2jPvGVggOuvNyRyFGei/w/uBrf+kpq0e+qU1N5UFdtpv5V8tYHz9mEaqJDCyU2FrR5M+eaLooBhqahk3GAMdhBn8umFt0qQZhmEA4XiQMYMjVgtUzvxb3AO7VdFbl4s6uI3fAfNOzknhAswp08f1Op0ZRt5saZIAVt/0f3veE+CQCQqCrKDfe5URfhEVlwCP8N4BZL6izn9K6c6nknjHffEFDG6JnHZ8CgPyAP4BMpBghrubV5tCfcLZHqr1znYi4GTUTVmaAZXq6UodGHXBxTaAqplietwwdu69nnFuQFA/UrPHW1GBhp/WYw+WgAl4Y5PNA37VlhYkNlfDXy7KPDGzmDemVF1zjcvgCCAUHYJyPAzY29HjFoNj3T01n8yhyaJo3ud30ec5o1z6N5ECOYiDaa2FaWO+eCXCN4JHl8sFYg3lKgC8aMY+ns2K3XbNCGRvq4Ieskb9bIRalYY+xBEqBmNf3VeLE2sevSjkwdHoillT3Xbh6yC7EBt4fFJbpkoI6puB9p+A4EbNauw1JwR/iFCKkB63DQ9tiUjpFwtwrp6iGKg46qCKkVAxwb8EEVksFDDOvrte6i+ujPDtDQZm03Kz/axwG2I95mpcNDadLWKDZSiHbWAx4otlBV9itQigG3cqy4bAKq8NV3brStYruVdT/V5zXPlZ9R/5BtnpEQUNxH1PKAb1fr4UH77UDxqMyneNKsI9ygdQllxAMgyNoINmyj+c66Ayulz5vvK1M8uh/8lQTX2bQAO59O8l0VD1qb2AbQoMHW6d5HSBhzDvCEu7bIxrnW9Wx7GQE+aO5BKSVMM6xETwQfyicTtTxo585hRtmixly9qdMxrQyguBhoyJ7z/LLSUjBq1nCqNc8wryYz+4mTj2KAe5eZ3PzVvlLbLQttYuvz2+T45iAeNFYCw0c8Ea4YDrv7mlBZcWIO6asBf6RSQPUBi2jiA401Ra9qIPEAVhB46OG2ViNJIQ9uzetQeMm2L6v86k9F5C1xgOqXuW2qpcgNLdUX+s2VCifzAM2cNXkjzxhZZKH+Wg4CQHVM+D+WLhsBkLwCJYDTVE9nN6mWpzCxgRgRNy1TZfzRwSItD9Bj10WmNophiQlCJZsbeAi4cZtKSouJgoq2bzyEysD0dP7I1blkwam/9IyDGqbe+NwVAFoeJOgJS7ffdtEU5gFXDJrvCxGYxnKwl7EzMtTj2cXB7b9TQvL5AyaHsstIe/WzAGN/LFDnY92wQYtpG/Dvyhb7TnYLPglTvNVfQkDzzhOlwy48oQyFgo9w0au+Pj29fzG/4heqTrWBGhM+tK73ZCKAn7YuA8Gt1Hu28FFp0xQ8gPMXnKfeIXljVcR1g+Sa51n8VYvyXadMfw24Ezx10H84U/e+XVPxGZksUIsrI0yZBzBn7sa5PFzhnjk5MER33R7UI3yMKcv7WNBZeTB9/1D47/ZXFD0FQMZVp2BU3Bvog5tN1qA/jQVb0PvLXdoKUDNDHkGoSC89oNiShaNk9RlhjK5+FsUuRE9CB3ZMAEgb5H1in0VzndoHiS1Ue2CWLRULGNlgw6ggrgO4xKH74jDMUStD01sprviCzv0g8aBwftkWSxhwGWDkUC5qvFKe79OEIvjcGeGEB7yKo7Dbp+smBzvjh6QDURSMe9FydtWhb7zFFh/jLtQ6E6/xImWbqW5nX6zV+4bwocKDIFPcvQ4ubeAwqf6F1m8AMZPPozMvKS13QnpBdn5stHBbnEQbKkqbwP4LmLbs47pWq64lSXlIsFU215qHbQSgpgN2bEOHS6P5CSGEEaMAGAhFvOck3egQ90803hqECCcQQogQuwYKZ7KNS70M472ZrH8gHKUMzHojuyH/Hg62BaDmcXGcaKu9Qx/piGV44AwGXDaSpfq1ANy5DWFjNrCCC5lO1aCt4TSQPGX79UPdbwhHsv1DxEKkowwlb8FeJ5rmZducqzGXLKQJ/ecqPHE819P3YCTHZ+huu0l+Oj2wOegZzxdbLbdcMrg8Cc0vPXULIRT+ydj9diTsYlPLgbgz5vvNxn+KxIW9CnvgipvVh1DJf5HE6oXUnWHcpWHyH2wi2ZSknTRYzA0/lU/Y+39pgmIGFQLK1jMQW3Tntn78ZZKW0jCnXnJtHPyLJ3NAMXL5z5M0Y1EeFpNdLllAddVagVWPQV+JVFPk1dZ0NVpOBmp1/ywdlK/aR+z1r8XBo0gxYtxLs9eH/XGSTlzvJ623AvePkzmeBb8/5nMrUtfJJNrm1NmVyBQHiJVEgj8KCS9DqhqRQGy7ZfQrkTR1JKrBT5oB/hZZihlWIAPbHzK4Bpni+pdOBIjubHfg6qpkZIrxvYIBmn3+X5tCTG62r45drHwErfctBfc/Wxn6FR38OHPScnYvDfLr839vBP4DWcHuj2jchIMAAAAASUVORK5CYII=",
      _link4: "/development/sass",
      alt4: "SASS",
      _src5: OtherprojectImage,
      _link5: "/development"
    },
    {
      title: "Travel",
      topic1: "Saipan",
      _src1: "https://static.thenounproject.com/png/1042874-200.png",
      _link1: "/travel/saipan",
      topic2: "Kota Kinabalu",
      _src2: "https://static.thenounproject.com/png/585798-200.png",
      _link2: "/travel/koki",
      topic3: "Osaka",
      _src3: "https://static.thenounproject.com/png/4499-200.png",
      _link3: "/travel/osaka",

      _link4: "/travel",
      _src4: OtherprojectImage
    }
  ];

  return (
    <div className="MainSlider">
      {values.map((value, index) => {
        return (
          <MainSlider
            title={value.title}
            topic1={value.topic1}
            _src1={value._src1}
            _link1={value._link1}
            topic2={value.topic2}
            _src2={value._src2}
            _link2={value._link2}
            topic3={value.topic3}
            _src3={value._src3}
            _link3={value._link3}
            topic4={value.topic4}
            _src4={value._src4}
            _link4={value._link4}
            topic5={value.topic5}
            _src5={value._src5}
            _link5={value._link5}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MainSliderList;
