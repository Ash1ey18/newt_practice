import React from "react";
import useSWR from "swr";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import { client } from "libs/client";
// import RecomArticles from "src/components/Layouts/RecomArticles";
const fetcher = async () => {
  debugger;
  await client.get({ endpoint: "" });
};
export default function AreaLayout({ children }) {
  const { data } = useSWR(
    "https://newt-blog-demo.microcms.io/api/v1/blog",
    fetcher
  );
  console.log(data);
  return (
    <>
      <Header />
      {children}
      {/* <RecomArticles recomBlogs={recomBlogs} /> */}
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const data = await client.get({ endpoint: "blog" });
//   return { props: { blog: data } };
// }

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};

// import e from "qs";
// import n, { Headers as t } from "cross-fetch";
// var r = function () {
//   return (r =
//     Object.assign ||
//     function (e) {
//       for (var n, t = 1, r = arguments.length; t < r; t++)
//         for (var o in (n = arguments[t]))
//           Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
//       return e;
//     }).apply(this, arguments);
// };
// function o(e, n, t, r) {
//   return new (t || (t = Promise))(function (o, i) {
//     function c(e) {
//       try {
//         s(r.next(e));
//       } catch (e) {
//         i(e);
//       }
//     }
//     function u(e) {
//       try {
//         s(r.throw(e));
//       } catch (e) {
//         i(e);
//       }
//     }
//     function s(e) {
//       var n;
//       e.done
//         ? o(e.value)
//         : ((n = e.value),
//           n instanceof t
//             ? n
//             : new t(function (e) {
//                 e(n);
//               })).then(c, u);
//     }
//     s((r = r.apply(e, n || [])).next());
//   });
// }
// function i(e, n) {
//   var t,
//     r,
//     o,
//     i,
//     c = {
//       label: 0,
//       sent: function () {
//         if (1 & o[0]) throw o[1];
//         return o[1];
//       },
//       trys: [],
//       ops: [],
//     };
//   return (
//     (i = { next: u(0), throw: u(1), return: u(2) }),
//     "function" == typeof Symbol &&
//       (i[Symbol.iterator] = function () {
//         return this;
//       }),
//     i
//   );
//   function u(u) {
//     return function (s) {
//       return (function (u) {
//         if (t) throw new TypeError("Generator is already executing.");
//         for (; i && ((i = 0), u[0] && (c = 0)), c; )
//           try {
//             if (
//               ((t = 1),
//               r &&
//                 (o =
//                   2 & u[0]
//                     ? r.return
//                     : u[0]
//                     ? r.throw || ((o = r.return) && o.call(r), 0)
//                     : r.next) &&
//                 !(o = o.call(r, u[1])).done)
//             )
//               return o;
//             switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
//               case 0:
//               case 1:
//                 o = u;
//                 break;
//               case 4:
//                 return c.label++, { value: u[1], done: !1 };
//               case 5:
//                 c.label++, (r = u[1]), (u = [0]);
//                 continue;
//               case 7:
//                 (u = c.ops.pop()), c.trys.pop();
//                 continue;
//               default:
//                 if (
//                   !((o = c.trys),
//                   (o = o.length > 0 && o[o.length - 1]) ||
//                     (6 !== u[0] && 2 !== u[0]))
//                 ) {
//                   c = 0;
//                   continue;
//                 }
//                 if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
//                   c.label = u[1];
//                   break;
//                 }
//                 if (6 === u[0] && c.label < o[1]) {
//                   (c.label = o[1]), (o = u);
//                   break;
//                 }
//                 if (o && c.label < o[2]) {
//                   (c.label = o[2]), c.ops.push(u);
//                   break;
//                 }
//                 o[2] && c.ops.pop(), c.trys.pop();
//                 continue;
//             }
//             u = n.call(e, c);
//           } catch (e) {
//             (u = [6, e]), (r = 0);
//           } finally {
//             t = o = 0;
//           }
//         if (5 & u[0]) throw u[1];
//         return { value: u[0] ? u[1] : void 0, done: !0 };
//       })([u, s]);
//     };
//   }
// }
// var c = function (e) {
//     return "string" == typeof e;
//   },
//   u = function (e) {
//     var t;
//     return (
//       (t = e || ("undefined" == typeof fetch ? n : fetch)),
//       function () {
//         for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
//         return t.apply(void 0, e);
//       }
//     );
//   },
//   s = function (e, n) {
//     var c = u(n),
//       s = "undefined" == typeof Headers ? t : Headers;
//     return function (n, t) {
//       return o(void 0, void 0, void 0, function () {
//         var o;
//         return i(this, function (i) {
//           return (
//             (o = new s(null == t ? void 0 : t.headers)).has(
//               "X-MICROCMS-API-KEY"
//             ) || o.set("X-MICROCMS-API-KEY", e),
//             [2, c(n, r(r({}, t), { headers: o }))]
//           );
//         });
//       });
//     };
//   },
//   a = function (n) {
//     var t = n.serviceDomain,
//       r = n.apiKey,
//       u = n.customFetch;
//     if (!t || !r)
//       throw new Error("parameter is required (check serviceDomain and apiKey)");
//     if (!c(t) || !c(r)) throw new Error("parameter is not string");
//     var a = "https://"
//         .concat(t, ".")
//         .concat("microcms.io", "/api/")
//         .concat("v1"),
//       d = function (n) {
//         var t = n.endpoint,
//           c = n.contentId,
//           d = n.queries,
//           f = void 0 === d ? {} : d,
//           l = n.method,
//           v = n.customHeaders,
//           p = n.customBody;
//         return o(void 0, void 0, void 0, function () {
//           var n, d, h, m, w, y, b;
//           return i(this, function (E) {
//             switch (E.label) {
//               case 0:
//                 (n = s(r, u)),
//                   (d = (function (n) {
//                     if (null === (t = n) || "object" != typeof t)
//                       throw new Error("queries is not object");
//                     var t;
//                     return e.stringify(n, { arrayFormat: "comma" });
//                   })(f)),
//                   (h = ""
//                     .concat(a, "/")
//                     .concat(t)
//                     .concat(c ? "/".concat(c) : "")
//                     .concat(d ? "?".concat(d) : "")),
//                   (E.label = 1);
//               case 1:
//                 return (
//                   E.trys.push([1, 5, , 6]),
//                   [4, n(h, { method: l || "GET", headers: v, body: p })]
//                 );
//               case 2:
//                 return (m = E.sent()).ok
//                   ? [3, 4]
//                   : [
//                       4,
//                       o(void 0, void 0, void 0, function () {
//                         var e;
//                         return i(this, function (n) {
//                           switch (n.label) {
//                             case 0:
//                               return n.trys.push([0, 2, , 3]), [4, m.json()];
//                             case 1:
//                               return [
//                                 2,
//                                 null != (e = n.sent().message) ? e : null,
//                               ];
//                             case 2:
//                               return n.sent(), [2, null];
//                             case 3:
//                               return [2];
//                           }
//                         });
//                       }),
//                     ];
//               case 3:
//                 return (
//                   (w = E.sent()),
//                   [
//                     2,
//                     Promise.reject(
//                       new Error(
//                         "fetch API response status: "
//                           .concat(m.status)
//                           .concat(w ? "\n  message is `".concat(w, "`") : "")
//                       )
//                     ),
//                   ]
//                 );
//               case 4:
//                 return "DELETE" === l ? [2] : [2, m.json()];
//               case 5:
//                 if ((y = E.sent()).data) throw y.data;
//                 if (null === (b = y.response) || void 0 === b ? void 0 : b.data)
//                   throw y.response.data;
//                 return [
//                   2,
//                   Promise.reject(
//                     new Error("Network Error.\n  Details: ".concat(y))
//                   ),
//                 ];
//               case 6:
//                 return [2];
//             }
//           });
//         });
//       };
//     return {
//       get: function (e) {
//         var n = e.endpoint,
//           t = e.contentId,
//           r = e.queries,
//           c = void 0 === r ? {} : r;
//         return o(void 0, void 0, void 0, function () {
//           return i(this, function (e) {
//             switch (e.label) {
//               case 0:
//                 return n
//                   ? [4, d({ endpoint: n, contentId: t, queries: c })]
//                   : [2, Promise.reject(new Error("endpoint is required"))];
//               case 1:
//                 return [2, e.sent()];
//             }
//           });
//         });
//       },
//       getList: function (e) {
//         var n = e.endpoint,
//           t = e.queries,
//           r = void 0 === t ? {} : t;
//         return o(void 0, void 0, void 0, function () {
//           return i(this, function (e) {
//             switch (e.label) {
//               case 0:
//                 return n
//                   ? [4, d({ endpoint: n, queries: r })]
//                   : [2, Promise.reject(new Error("endpoint is required"))];
//               case 1:
//                 return [2, e.sent()];
//             }
//           });
//         });
//       },
//       getListDetail: function (e) {
//         var n = e.endpoint,
//           t = e.contentId,
//           r = e.queries,
//           c = void 0 === r ? {} : r;
//         return o(void 0, void 0, void 0, function () {
//           return i(this, function (e) {
//             switch (e.label) {
//               case 0:
//                 return n
//                   ? [4, d({ endpoint: n, contentId: t, queries: c })]
//                   : [2, Promise.reject(new Error("endpoint is required"))];
//               case 1:
//                 return [2, e.sent()];
//             }
//           });
//         });
//       },
//       getObject: function (e) {
//         var n = e.endpoint,
//           t = e.queries,
//           r = void 0 === t ? {} : t;
//         return o(void 0, void 0, void 0, function () {
//           return i(this, function (e) {
//             switch (e.label) {
//               case 0:
//                 return n
//                   ? [4, d({ endpoint: n, queries: r })]
//                   : [2, Promise.reject(new Error("endpoint is required"))];
//               case 1:
//                 return [2, e.sent()];
//             }
//           });
//         });
//       },
//       create: function (e) {
//         var n = e.endpoint,
//           t = e.contentId,
//           r = e.content,
//           c = e.isDraft,
//           u = void 0 !== c && c;
//         return o(void 0, void 0, void 0, function () {
//           var e, o, c, s;
//           return i(this, function (i) {
//             return n
//               ? ((e = u ? { status: "draft" } : {}),
//                 (o = t ? "PUT" : "POST"),
//                 (c = { "Content-Type": "application/json" }),
//                 (s = JSON.stringify(r)),
//                 [
//                   2,
//                   d({
//                     endpoint: n,
//                     contentId: t,
//                     queries: e,
//                     method: o,
//                     customHeaders: c,
//                     customBody: s,
//                   }),
//                 ])
//               : [2, Promise.reject(new Error("endpoint is required"))];
//           });
//         });
//       },
//       update: function (e) {
//         var n = e.endpoint,
//           t = e.contentId,
//           r = e.content;
//         return o(void 0, void 0, void 0, function () {
//           var e, o;
//           return i(this, function (i) {
//             return n
//               ? ("PATCH",
//                 (e = { "Content-Type": "application/json" }),
//                 (o = JSON.stringify(r)),
//                 [
//                   2,
//                   d({
//                     endpoint: n,
//                     contentId: t,
//                     method: "PATCH",
//                     customHeaders: e,
//                     customBody: o,
//                   }),
//                 ])
//               : [2, Promise.reject(new Error("endpoint is required"))];
//           });
//         });
//       },
//       delete: function (e) {
//         var n = e.endpoint,
//           t = e.contentId;
//         return o(void 0, void 0, void 0, function () {
//           return i(this, function (e) {
//             switch (e.label) {
//               case 0:
//                 return n
//                   ? t
//                     ? ("DELETE",
//                       [4, d({ endpoint: n, contentId: t, method: "DELETE" })])
//                     : [2, Promise.reject(new Error("contentId is required"))]
//                   : [2, Promise.reject(new Error("endpoint is required"))];
//               case 1:
//                 return e.sent(), [2];
//             }
//           });
//         });
//       },
//     };
//   };
// export { a as createClient };
