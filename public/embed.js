(function () {
  "use strict";

  var script = document.currentScript;
  var collectionId = script.getAttribute("data-collection");
  if (!collectionId) return;

  var baseUrl = script.src.replace("/embed.js", "");

  var container = document.createElement("div");
  container.id = "shoutbase-widget-" + collectionId;
  script.parentNode.insertBefore(container, script.nextSibling);

  fetch(baseUrl + "/api/widget/" + collectionId)
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      if (!data.testimonials || data.testimonials.length === 0) {
        container.innerHTML =
          '<p style="text-align:center;color:#999;font-size:14px;">No testimonials yet.</p>';
        return;
      }

      var brandColor = data.collection.brandColor || "#6d28d9";
      var stars = function (rating) {
        var s = "";
        for (var i = 0; i < 5; i++) {
          s +=
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="' +
            (i < rating ? "#f59e0b" : "#e5e7eb") +
            '" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
        return s;
      };

      var html =
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">';

      data.testimonials.forEach(function (t) {
        var initials = t.author_name ? t.author_name.charAt(0) : "?";
        var subtitle = [t.author_title, t.author_company]
          .filter(Boolean)
          .join(", ");

        html +=
          '<div style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb;">' +
          '<div style="display:flex;gap:2px;margin-bottom:8px;">' +
          stars(t.rating) +
          "</div>" +
          '<p style="color:#374151;font-size:14px;line-height:1.6;margin:0 0 12px;">"' +
          t.content.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
          '"</p>' +
          '<div style="display:flex;align-items:center;gap:10px;">' +
          '<div style="width:32px;height:32px;border-radius:50%;background:' +
          brandColor +
          ';color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;">' +
          initials +
          "</div>" +
          "<div>" +
          '<p style="margin:0;font-size:13px;font-weight:600;color:#111827;">' +
          t.author_name.replace(/</g, "&lt;") +
          "</p>" +
          (subtitle
            ? '<p style="margin:0;font-size:11px;color:#6b7280;">' +
              subtitle.replace(/</g, "&lt;") +
              "</p>"
            : "") +
          "</div></div></div>";
      });

      html += "</div>";
      html +=
        '<div style="text-align:center;margin-top:12px;"><a href="' +
        baseUrl +
        '" target="_blank" style="font-size:11px;color:#9ca3af;text-decoration:none;">Powered by ShoutBase</a></div>';

      container.innerHTML = html;
    })
    .catch(function () {
      container.innerHTML = "";
    });
})();
