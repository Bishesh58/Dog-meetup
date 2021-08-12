import React from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAABXFBMVEX39/cjNFL8xqwgHh/TlncAAAD/////ya/6+vr/zLH/y7DQk3P8/PwAAAwdGxzWmHjDbGIADxYMJUgAHUQAHkQYGRsbLk4AChEAAAbfl4gAFkDanoDqsZURFBjvt5zarJbjqYzNzc0YFReuinmkqbLn5+fExMTmrJDtuqK4kn/ntp/Noo6efW7AiW2Ga183Ly03RV9jbH5iYWKlpKVfTUZ9W0tze4u5vMOAh5WSmKMUKUvc3uE0MjOEg4Rsa2xRT1CufWSoeGGtra1NOzNpTkE1Kyh8WUluWE+Vd2n73c/47+t/Zlr70r5sV05wUUvqqZY9QVZsWl9QW3CnioVESF2DgoJBQEGVlZWWbFhUQDccIyuYioYvOD/VoIe4i3bIrqKue22TZlzLhXarYFeKTkhrPTquYFh3PDnAg3TnnIwhFBA4JR7sxLH/59wACj5WS1eFc3cABUJoX2qzkor3cI/LAAAUtUlEQVR4nO2dCXfayJqGQUIq7WoWATGIxYDN7iV4w05iBzsmIekkjjvGPRNPkl6mM3Nzu+f2/z9nqkoCJCFhFiWU7/F7TnccB5t69C311UogcK973ete97rXve41nTisZbfim4iT2EDpMJ/Pl1hp2W3xWxwbyF89oRmsJ08DrGnIfwtTcuzhTwrDrCo01iqz+jCA7JjPH5YCEivdaUaOzW8zjIlmSEkyQx1tX+U59s4SsqVtZpX2lrIK7frokF12O+cSx15NhDMRGeanwB00IFt6z9wKh5WkS3cuobJrU5jO1KpSumP2g46p3M415Nu+Wx0i+9OUjjngO3p6h/oI6fFsdCjDvCc/g5oexm7PSocMyDwlnI99bP4xBx0Uc0U0H5dnUPvYR/PRQb6HJPPBfAKbxz6clw7y5QlOoNIRwwWk/Px0tEKTPI5gmABXWp2hvxvT6hGxBQx3yDAl9snUtYo7n0Jq/wAzC7O2QOCZfMwamXwQT1nQdkgKof0fxKMXibuhyOz/uEVypp3vJwL5YGrxCY9A+3GwV/cIPE3T9fBIuq5r2m18hA0AudI26xJ5CuSiO6c7/ZPjxnED6vj4pL+zc9qhIabmHamrj8kyn3T0OOD0Tch2tnPSUF0lHvdPz8JhLzMyhySZT1pjth2hp4XP+ggt5CHMeHJKuxOSZT7pinm/ZsMLd04msFkYj0/DOunRB4cJySsLnqb1b2cbEIp9OjyO95Cc4lMqPU1aE4veCU0JZxL2dacFV58Q450w8uyOeToLHAYUTxNO8y2baiT7IEgfpxNFMaSmTKG/iWOAJ47OkJihrWRPKlrHHnYQJZfOUBQYiKKozLoBaaFUG2c2PmWVkOTimFwJN6x0orpOGUg2oW+lc+u5XEoNmZBqqGPjW31PCN62tRrTdyx0YiozjmZlRJiZdVU0+Oz2I6Oy5tj3ttAbJU0xRXmz2TAzORH7p72DYNZICL8jq/Fg5A3gQpmp4AxCKgUB1b6NTzlaPp701J5Yrk08MTc1mwGYQfazhx/zdOl8jlGsZvYKYnp6040MqB7bzLd6tPzos8+5m5lFnMExR4A5UbWPqkgYOEjWzKn31XnpEJ96Spp3BgJPLBNk4WN1bjrE98xWfBJQWHP5vMWjUKcurs9JR1GCPXcSYT3a4pxhaLzU3HQUqNlKawJ6Pi7wcNSvK2fQeHPDQbysbMVTlGXTQeNZdgnAfmH2LsGKV7Xh0czVks0nrR1ZB7JwlL4AHUWV7eM+hV62d9oq6vCxmFmEjqIcw/ZlRx9XsvXq6gJ5BQk4ZkuXPWFtG8zC0FvQeLwDb3V7yXjWkjp8olotAXhemGgqQRAc40HeXlTTyvsl41lXLMONnNlawGcTCfq6Vyl7EQK+XKtUCpVsmedHiELXHnzK0XKrTjRNNtwdF26YvsnXWrJCK5qeYDoVwQ1QKGwwcgJKZhKtGj+Ertl7hmVbLyAFnl4NkmcihPFAuZUc+pgm0xV+HG9DHnmhxpyPxvV26xEwGy9Jw3yAQ0+oarqiJ2SoBGJQmJ4Tjr82KKB90XqYousDA/KvSCuqh+EHh+oAVR56IkmfF2rZbK2+kYStT56ojjFEldE0TQ+HN1q9Xq/VUZIyUzf4hIq96lz+dOBwt4f+DGYWUJb1ZhbweBpMELLdVqugOsdIoNu5Pt85zmVgcoWiqpVeom68wla3EDEXP8ideh8NhVoFypIKgQCbnxOdfDyfRitIaI4XhR18lVBz8c5lFy0B62xLuJGGT99l9g+kQvaBBEiHBjPUopgzfmLQpVhyJwmb6IYdu0J71yyifRiYsi4yiHbLjuoyAtKmNbOcqg6oYatBGrnn8PuqdXHBOXvBXw+6DALyigVP37EOhgAvVKtVIIChew7Mh74eoKmNhohi0GJ2vmXiLbveNDQsqvW+xf/47HnnvNs871UMG2bEQfSB9YHt1MZp5/TZ6elOQw1Z8Ho6MXkFiXu/akmcJkO3WcY5H1QrNdNkg3H8MKn0+2IqlcvlQvCL3PBHh2UnISuYgy2q4ZOhi4Fmla9W6oUarKgBlTWjz0BIi2ZCuVmnQLbe7FaAkDkeJVahniCnz0NiH2PzhY8zwxZS1Q7zcxgWZtdmL4jwsO+CnLF6lIZ9X2VDTui6/HOB52tDy4OCgbf0eZaBzJ4v3Bg0sEZlme0S7jCYqyfQTY2IG+Ghdb9a+T+M0xxMPtkTQHaANyjLCAm9wKAsCzcGLaxS5z2JvUriRrLbDKy3IJURXzizwC/q2feskZRW8zJTEEZha/Trympp2VgDGclTtyZOsHH1lIHDOaa09p96pw5waqHMHJqCthN68qPDJ0k43vu5VShbhoTmXCc5xoPmQ7OBes5afPDZQr1eL1RqWQrNSSA8s/kq8lIAn0C2UID/XnVMWWA8hYylZ1O4MFNsJRkaLggC/B9fRt8Ho249I4og86GMJ1qMyRb7hEs5CceBla8EVCwDob2qypm1jel1CsMJ1ZsPuPGi6ZuoC0RF2M3JB2M7CHpxLm39WYaWszy1bCaLuP9iaK1jK4w/PNs5Qbs3TzKDqmX0j6gHBJmbndPTZzvPnp3u3NhGGUBOdPlU5jkx5uOeCwVZO7VNqQDqw0n/OJQ2Rzs5W9kcMl6RSX/48CHt8E0KaDI0dg4QgxdIi6CV6DlmjKxRBXBnMNL64CUue3oE+pynQiHqxbKpTHHPVZGqMs0Jc7aZGdYehI0KgL0j9XXZXKY4SlQB3+p648FuYfq1B75Thf8XiQm+Fxk4GMjV6hPwQjOsPfAtVMSl1l+SgpcWqXUxV5tgoFlW/YSCgErwHCl4X3M5OIhLlb1bnJlp4aiK802KGLwUlYN4FW8LudF5Pg1QU9PQH3LkxB4agYvOjsHS4KrL97yfRl8VRXE9Q0pZ9gIZTxVpLzyQdfmmUPDAA1m8sylFTL/3gsIDcCbr1WC3pAMqHt4pFE7wvjRy8DJoM2aD8eoZXP0QVFw8Fok/x9uVRXLwchhP3vDwThNvNBeG5pc88QSaNLyUsVVY9vBOUKDQylHNBBQqvWZV4Lsez6LKNAhzThNPP/dKLs0srEkZAx/U0EVJFa8iBxSSeKaQnNQSSIvGRu9k2TO5FOrdLl1A+Hy3VSuX6xWPQOWvw8Z2XmLGs9zLnCiGIJ63+QCelijUYNxVajyggOD1IKpJLSfmYCFAStECB0QUWtNK0DRT80qeAlrG5LO9XjcL/0TTMDzvhohWGDJ4RygpvToUnkAJ07SSqPLjbRZ4CjpnswfZKhTP13pnSRiIG6/qNcH5aj4rK2cAz4gum2kk7iUFe3Y8+Sqf1xxNBqDQQVtYdKSEfE3LOl6fRJsnEs2q1Z0BX9AUbYNPQ+sR45tQX+HwUz3DrdaTLXuTy9YtLDRtPxGsM83Ri0G1Iyu01uFRD0JKQY1FZcTUYFVVS3ZHEyhwFD/cCqBB6yVkORHWLceek+aOD/jKa/wctBb+Bkl4HEwtVG/IkdjI8maTyy1jQQSd8d4471ZqtdrNx0+9Fm1s6YGSexR6McgWjJ/XX+GfJabXC+DcCfj6aEeKBm0CIFu2l8Bt1uWjnY+fH3x5neGpH5A+P8gWXumy8Y9avczDKsbcEaHjgRVJoRfAudO2n0huZQs9OonaryQSzdqDH5z6DH/ilZzAL5BbhdrA9jqaceOXzePQC4rKJq1JQ5MTOENq8kaBfz0GZwDyVMHwUS0xfDbMo+cvny8bZ0zci6/O471GGMKO4rOD65dff/0Ff/GF+vyBdmyfTj5kibwyye0moWSTB1+GTJ8+/fbbr7//Eu78+OlH7bfff/jh9/+u8NS1/bEQcfTERezV2LURTIH6A7P9+uOnPx48ePDlwYM/Pn188AXpM0ygeKTEd20/x+RJtN3YEWi0Cwvt0qzs/PisBrkGGn75mjLXLfms1X5E7EVylQMvgQdAgAdojfL16wc2vbZsyaomrc+ETN90noEe1h+D0hPN5r42lLEtevHW/eFkbLVyk+McLfSzscmw0dF86zetdSgx21lcNOadE88xDOgKttAjNLMExr1TObOOHfCAdiDr3kHryRNlddkQ3hrLnbJlRkUoMPJQlilfwWY8Iraoesl5H5S2YcHrWjCSlolr2wiQpN06Y5KclwTKBYt76pZTmkM6vmktyhSa2MjDUhzXc+mjuUGhMtwELleH+//shXiSuBvYbBozn27p+4bHuywdouC4R4HYksWQdOQwn9w1B+6W7ns0H2odAyPjPSLaeC7Jk06iE1Jo++YozLRXJrKtHEMl+LKbf6vG721mKny1ztM9nt8wHVEx1pKE2vA75isJHQvZNHZZIBwWMVktmR1lkWQVVtl8odC0uSYxu6cnyeVyY7mnb9BapzU61NfJQiVaNjrlf16QnVcMuVxNrSOLKhZH1FDpQtvPySZrd8A1Ayj8kvTs0q4Jm/zzEvfif2+7YNRFcpWkielJkv6RmPkWYLkukLIF8DZxXz/ItwPZlIA9PUnz7hP1ItN3m/T0lt4hakXvFnGUOhOfvoF2/t+R0IN4fEjdmZ4P05G2ajJB3MvUDHwGHfX8DtQshriX6+LUfIkWphPeHdwNPo4N/IPCd/5Nw5c0l59B7Z9bd+HzsqTS7tsMPiCrHnvePD2QJg9ulADZaHvzkPi6jM1H36hpkDHupDxzu5Z5JLljOfz1Zzwe3SPcQaX8SuRGzQHjfLOqPkt4G1CX65YJz0woGAyukB2AXCkSf4OPsGXMS2GPz8LuFZomn5at07wZtRkPBqO7JPOxF/F4Uw2FRge4VbV/5hKCWqJzbLvSDKRDjQi0X2SL3PiT9mLB9kfjnD3IiYPT9/1OWLft3Qnrpw3VfkkBfBzqZhDzkfuJkdC92ugaRGQYywF8tdG/VvCHMaAPZ9Cu+6KqOq5KRNdzvo0bfHmJQAtyEnsQMfDMU86Z0AhQDTVO+v2dnf5JI2RcXU3ZrZcLqT2MF4xHN4slskwosYF8cR81DuMNjtnnbLdfmDLO5TvObsBUq3YNPGTB6G6emA8d5NhS8WIlFmljvI/qqPHAfnmJ5RoT51WJdjz4a6AJAySYUGLXtlYiw5bFu/iYxXAVIaO6AIq5sX2f0LxNCx78RZGV/cNlm1AKFDej1mbF3xob9Ud2GYXgUC53CcIi/K0ND5vwYm+ZJoRw8YijTUHV4XwApB18zotrKHxVhnrp/E3wYcXaSzMhx+4Fx+CC7RucPGx9NmXHG6dDoRca/134960sxYQce3gRdWlOvKeOZUZgTaEudDj06m1XPGTC4MF37ikk9nB3xRkrFu90htfopn/Xq49hiaq+8aBDiqxs7X23zh724HtbK14PG3cNYx3bCM/Fdqgka3r9vu9sQoktHQRjHpZDDfnTMJXdSOYQwq1PwBdlqBPhTBN+884elid7F56GM5tx40yeiGDA5xZ5lOgdebYn9007e8S2FY14G87UG9XFC6EDiujSNTffTIsTI88KGIl9k56Cw2yRCU45Urvpll1AOpdbd7UdSKndaYxn/nbY2XP+fko0jLfilGy4BW7uSbl97Ivpm6Gp4ZD8TTO4ZJ7CJ60S3bKnlzLj9dhtisR2D30BlNj87oxs8Pm+CbkM6jwEcjfuBctEtVe28gsDSpyjZJ6W71I1DmhPo2nzivM9Vi4WA2QDB+1ZDWfjE6fhy8zsmiPArfk/iRfCRebwmsFbY/+cgk+YxzVHgPuBuboJONhZAA69c/BmOr55bWeo3d6b3UPdBzuzvnPXyC8T7zPh/7UYXjAY3Zr1s7DhYCe2KBxU5O2tH23Dv1v4KQbb8Rk/K3rfa7AzoyLGHQJuZbQZeFk/HuNsixPsli/vCRVvupWfFpV9eqPo7tT+yR3+06c3HVbXXp/eI/zpj5dAP7mYmo89cJtlmEvmzIvXx2yUfXujYHsGvv3F492QMfPiVZ2Bql9REMSLL1PzbfnFF5wUfL7iBaPT5xfuwic+7J3qd8ELrkx9RIcLXEw/wJyk+Ft0vfbHsvt5orKvePHNqcsXLnDpD19Q/fhnpB31uC7Dp/cwFStO3z0ENv1J2m/a6Pe03d3Tl3ewaPrqE/L5+Gwj79zMx8830vNUdG/66tO3+EOKX7pdVsP71q2b7zLLzgrI51v/EIy4+Sb/l794wfb0dJCP8636DEbGrmND1ye88ze3BCOzbfyR9v0qm9p/CU7LCYC69Nk527FZ6FD9ueLTOzuCj3/3f1V/6dqxyObuwYwf58ru+cQXtXtmLdp+5yNdO7p5kC+x7MzT12x+zskyh2zBB8ptNMr24/citdFOkTknBaXSph8J1B58b3x0y0hkoTl5Ttr1wUGtwcf/y7+MCeEWXRRji/NMVTsUHV5DIPgwf2SqjeAWYsN8h4s76Cj4yn7RtWP7JV92gHLc/qIOGh8En/C3P3jx6K4/cEhsfsGJ3filicf70iHEo1v+rIGZkhad/jSDD1T9MF70cvH1L4c8dupMq8jfwEgsi6fNWHCOlYVbtdjSgxl8/MJwkUjxG23ikaRie27ANwgP1Bb0zXbsYL5Fr+kAA8VJu3YmKVZefIzXXvGpL/AG5G7duuMuHHxgEePFV3zsC7wB2cP9YHRmwvhfPAUW6PT87gu8xbFcfn8zGrFX/fFbBgGbwgLLlfHoglsFZiVkS3v7F/FINIYUjUaCW8XJsxexKph71SR6ufa9d61yEgsZD/N7UPlDNJpki5O6/sjf886uxDb3lrVvnDOF/zKx+IbBN1dBFgkuDc4pTjrwHj29mWfRJBL8Vr34XGJLW14eGp89sUA4jiC4AEo6+UsPK828Ny5e/IYlyrySpL2gDzPAZMIhweJ0c87abQTnx0TDtxK04OX8UzTxWLBIMBwS2gu6MtcsKTp7QlK29BDHBoqbs5bf7Wj8YOmHv6YVLL8PNqe3YTsW2V2TSDi6N61g6XZYvIjFbp10b0dWNvfz3F1iM4TOCeQPLuIrcIjhBhlvR2LRzd29wztlN5sQ4uHewdZmMArHGBGkNvwvFl2JBC/2i/mSNPv6DmHiJDjGCOAxRrF4cHBQLMKhRgmC3XkyqziIORBH5CXw97rXve51r3vdi0D9P9PDgvVBIriuAAAAAElFTkSuQmCC" style={{ height: "150px", width: "150px" }}></Avatar>
        <div className="profile__title">
          <IconButton>
            <AddAPhotoIcon />
          </IconButton>
          <h3>Bishesh Sunam</h3>
          <p>bishesh.sunam@gmail.com</p>
        </div>
      </div>
      <div className="profile__right">
          
        <form>
        <h3>Account Details</h3>
        <br></br>
          <label>First name:</label>
          <input placeholder="First Name" type="fname" />
          <label> Last name:</label>
          <input placeholder="Last Name" type="lname" />
          <label> Email:</label>
          <input placeholder="Email" type="email" />
          <label> Password:</label>
          <input placeholder="Password" type="password" />
          <label> Address:</label>
          <input placeholder="Address" type="address" />
          <label> Dog name:</label>
          <input placeholder="Dog name" type="dname" />
          <label> Dog breed:</label>
          <input placeholder="Dog breed" type="dbreed" />
          <button type="submit" onClick="">
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
