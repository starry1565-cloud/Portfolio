/* @ds-bundle: {"format":3,"namespace":"AppleWebDesignSystem_f2d81f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"GlobalNav","sourcePath":"components/navigation/GlobalNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"ConfiguratorChip","sourcePath":"components/surfaces/ConfiguratorChip.jsx"},{"name":"ProductTile","sourcePath":"components/surfaces/ProductTile.jsx"},{"name":"StoreCard","sourcePath":"components/surfaces/StoreCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ac6f0f297738","components/buttons/IconButton.jsx":"da2527fa08d3","components/buttons/TextLink.jsx":"42fc0a433c16","components/forms/SearchInput.jsx":"79f75ac6c683","components/navigation/Footer.jsx":"13a0d13bf069","components/navigation/GlobalNav.jsx":"a3e7a5a08961","components/navigation/SubNav.jsx":"ab1d6e09a807","components/surfaces/ConfiguratorChip.jsx":"496c1e91b92e","components/surfaces/ProductTile.jsx":"a39f2f6b2610","components/surfaces/StoreCard.jsx":"565fd4a0cf4f","ui_kits/soomin-web/BuyScreen.jsx":"f39bb8a28eb7","ui_kits/soomin-web/Chrome.jsx":"2419d5a6175b","ui_kits/soomin-web/HomeScreen.jsx":"e2595dd3034b","ui_kits/soomin-web/StoreScreen.jsx":"ef5ae8bb7c1f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AppleWebDesignSystem_f2d81f = window.AppleWebDesignSystem_f2d81f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the Apple action grammar.
 * Variants map to the documented button components:
 *  - primary        : Action Blue pill ("Buy")
 *  - secondary      : ghost pill, blue text + 1px blue border ("Learn more")
 *  - dark           : near-black utility rect, 8px radius (Sign In, Bag)
 *  - pearl          : pearl capsule, 11px radius, soft ring (card secondary)
 *  - store-hero      : larger Action Blue pill, 18px/300 (store landing)
 * Active state is always transform: scale(0.95) — the system micro-interaction.
 */
function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xs)",
    fontFamily: "var(--font-text)",
    cursor: disabled ? "default" : "pointer",
    border: "none",
    whiteSpace: "nowrap",
    transition: "var(--press-transition)",
    userSelect: "none",
    minHeight: 44
  };
  const variants = {
    primary: {
      background: "var(--action)",
      color: "var(--on-action)",
      fontSize: "var(--type-body-size)",
      fontWeight: "var(--weight-regular)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px"
    },
    secondary: {
      background: "transparent",
      color: "var(--action)",
      fontSize: "var(--type-body-size)",
      fontWeight: "var(--weight-regular)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      border: "1px solid var(--action)"
    },
    dark: {
      background: "var(--color-ink)",
      color: "var(--color-body-on-dark)",
      fontSize: "var(--type-caption-size)",
      fontWeight: "var(--weight-regular)",
      letterSpacing: "var(--type-caption-track)",
      borderRadius: "var(--radius-sm)",
      padding: "8px 15px",
      minHeight: 36
    },
    pearl: {
      background: "var(--color-surface-pearl)",
      color: "var(--color-ink-muted-80)",
      fontSize: "var(--type-caption-size)",
      fontWeight: "var(--weight-regular)",
      borderRadius: "var(--radius-md)",
      padding: "8px 14px",
      border: "3px solid var(--color-divider-soft)",
      minHeight: 36
    },
    "store-hero": {
      background: "var(--action)",
      color: "var(--on-action)",
      fontSize: "var(--type-button-large-size)",
      fontWeight: "var(--weight-light)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 28px"
    }
  };
  const disabledStyle = disabled ? {
    background: "var(--color-canvas-parchment)",
    color: "var(--color-ink-muted-48)",
    border: "none",
    cursor: "default"
  } : null;
  const handleDown = e => {
    if (!disabled) e.currentTarget.style.transform = `scale(var(--press-scale))`;
  };
  const handleUp = e => {
    e.currentTarget.style.transform = "scale(1)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: handleDown,
    onMouseUp: handleUp,
    onMouseLeave: handleUp,
    onBlur: handleUp,
    style: {
      ...base,
      ...variants[variant],
      ...disabledStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — circular control chip that floats over photography.
 * 44×44, translucent gray fill, ink glyph. Used for carousel / close / in-image controls.
 */
function IconButton({
  children,
  label,
  onClick,
  style,
  ...rest
}) {
  const handleDown = e => {
    e.currentTarget.style.transform = "scale(var(--press-scale))";
  };
  const handleUp = e => {
    e.currentTarget.style.transform = "scale(1)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseDown: handleDown,
    onMouseUp: handleUp,
    onMouseLeave: handleUp,
    onBlur: handleUp,
    style: {
      width: 44,
      height: 44,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      background: "var(--color-surface-chip-translucent)",
      color: "var(--color-ink)",
      border: "none",
      cursor: "pointer",
      backdropFilter: "blur(8px)",
      transition: "var(--press-transition)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink — inline body link. Action Blue on light surfaces; pass onDark to
 * switch to Sky Link Blue (Action Blue disappears against dark tiles).
 * Apple links commonly pair with a chevron and no underline.
 */
function TextLink({
  children,
  href = "#",
  onDark = false,
  chevron = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      color: onDark ? "var(--color-primary-on-dark)" : "var(--action)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-track)",
      textDecoration: "none",
      ...style
    }
  }, rest), children, chevron && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "0.9em"
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchInput — pill-shaped search field (accessories search grammar).
 * 44px tall, leading search glyph, hairline border. Matches the CTA pill radius.
 */
function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      height: 44,
      background: "var(--color-canvas)",
      border: "1px solid var(--color-border-translucent)",
      borderRadius: "var(--radius-pill)",
      padding: "0 20px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 15 15",
    fill: "none",
    "aria-hidden": "true",
    style: {
      color: "var(--color-ink-muted-48)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6.4",
    cy: "6.4",
    r: "4.6",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10l3.2 3.2",
    stroke: "currentColor",
    strokeWidth: "1.3",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-track)",
      color: "var(--color-ink)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Footer — parchment surface, dense link columns with the signature relaxed
 * 2.41 line-height, caption-strong headings, fine-print legal row.
 */
function Footer({
  columns = [],
  legal,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas-parchment)",
      color: "var(--color-ink-muted-80)",
      padding: "40px 22px 24px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(columns.length || 1, 5)}, 1fr)`,
      gap: "var(--space-xl)",
      paddingBottom: 24,
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-caption-size)",
      letterSpacing: "var(--type-caption-track)",
      color: "var(--color-ink)",
      marginBottom: 4
    }
  }, col.heading), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      lineHeight: "var(--type-dense-link-lh)",
      color: "var(--color-ink-muted-80)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "16px auto 0",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-fine-print-size)",
      letterSpacing: "var(--type-fine-print-track)",
      color: "var(--color-ink-muted-48)"
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalNav.jsx
try { (() => {
/**
 * GlobalNav — persistent ultra-thin black bar pinned to the top of every page.
 * 44px tall, true-black, quiet 12px links edge-to-edge, right-aligned icon cluster.
 * `brand` is a slot for the wordmark/glyph (kept brand-neutral by default).
 */
function GlobalNav({
  items = [],
  brand,
  onSearch,
  onBag,
  style
}) {
  const linkStyle = {
    color: "var(--color-body-on-dark)",
    fontFamily: "var(--font-text)",
    fontSize: "var(--type-nav-size)",
    letterSpacing: "var(--type-nav-track)",
    textDecoration: "none",
    opacity: 0.92
  };
  const iconBtn = {
    background: "none",
    border: "none",
    color: "var(--color-body-on-dark)",
    cursor: "pointer",
    padding: 4,
    display: "inline-flex"
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 44,
      background: "var(--surface-nav)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)",
      padding: "0 22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-body-on-dark)",
      display: "inline-flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: 15
    }
  }, brand ?? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u25F5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)",
      flex: 1,
      justifyContent: "center"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href ?? "#",
    style: linkStyle
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Search",
    onClick: onSearch,
    style: iconBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6.4",
    cy: "6.4",
    r: "4.6",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10l3.2 3.2",
    stroke: "currentColor",
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Bag",
    onClick: onBag,
    style: iconBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4.5C3 2.6 4.8 1 7 1s4 1.6 4 3.5M1.3 4.5h11.4l-.7 9.3a1 1 0 01-1 .92H3a1 1 0 01-1-.92L1.3 4.5z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  })))));
}
Object.assign(__ds_scope, { GlobalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
/**
 * SubNav — surface-specific frosted-glass bar that sticks below the GlobalNav.
 * Parchment @ 80% + backdrop-blur. Left: category name (tagline type).
 * Right: inline links ending in a persistent primary CTA.
 */
function SubNav({
  category,
  links = [],
  cta,
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      display: "flex",
      alignItems: "center",
      padding: "0 22px",
      background: "var(--frosted-bg)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      borderBottom: "1px solid var(--color-divider-soft)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-tagline-size)",
      letterSpacing: "var(--type-tagline-track)",
      color: "var(--color-ink)"
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "var(--space-lg)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href ?? "#",
    style: {
      color: "var(--color-ink)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      letterSpacing: "var(--type-caption-track)",
      textDecoration: "none",
      opacity: 0.85
    }
  }, l.label)), cta && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      background: "var(--action)",
      color: "var(--on-action)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      padding: "6px 16px",
      cursor: "pointer"
    }
  }, cta)));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ConfiguratorChip.jsx
try { (() => {
/**
 * ConfiguratorChip — pill-shaped tappable option cell (iPhone buy page).
 * Selected state upgrades the border to 2px Focus Blue.
 */
function ConfiguratorChip({
  thumb,
  label,
  delta,
  selected = false,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSelect,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: selected ? "2px solid var(--color-primary-focus)" : "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-pill)",
      padding: selected ? "11px 15px" : "12px 16px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      letterSpacing: "var(--type-caption-track)",
      cursor: "pointer",
      textAlign: "left",
      ...style
    }
  }, thumb && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 24,
      height: 24
    }
  }, thumb), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-semibold)"
    }
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--color-ink-muted-48)"
    }
  }, delta)));
}
Object.assign(__ds_scope, { ConfiguratorChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ConfiguratorChip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductTile.jsx
try { (() => {
const SURFACES = {
  light: {
    bg: "var(--color-canvas)",
    dark: false
  },
  parchment: {
    bg: "var(--color-canvas-parchment)",
    dark: false
  },
  dark: {
    bg: "var(--color-surface-tile-1)",
    dark: true
  },
  "dark-2": {
    bg: "var(--color-surface-tile-2)",
    dark: true
  },
  "dark-3": {
    bg: "var(--color-surface-tile-3)",
    dark: true
  }
};

/**
 * ProductTile — full-bleed section tile. The color change IS the divider, so
 * tiles touch edge-to-edge with no rounding and no shadow on the tile itself.
 * Centered stack: title → tagline → CTAs → product render (children).
 */
function ProductTile({
  variant = "light",
  eyebrow,
  title,
  tagline,
  primaryCta = "Learn more",
  secondaryCta = "Buy",
  onPrimary,
  onSecondary,
  children,
  style
}) {
  const s = SURFACES[variant] ?? SURFACES.light;
  const heading = s.dark ? "var(--color-body-on-dark)" : "var(--color-ink)";
  const sub = s.dark ? "var(--color-body-muted)" : "var(--color-ink)";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: s.bg,
      color: heading,
      borderRadius: "var(--radius-none)",
      padding: "var(--space-section) 22px",
      textAlign: "center",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.02em",
      color: "var(--action)",
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-display-lg-size)",
      lineHeight: "var(--type-display-lg-lh)",
      letterSpacing: "-0.5px",
      color: heading,
      margin: 0
    }
  }, title), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--type-lead-size)",
      lineHeight: "var(--type-lead-lh)",
      letterSpacing: "var(--type-lead-track)",
      color: sub,
      margin: "12px auto 0",
      maxWidth: 640
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      justifyContent: "center",
      marginTop: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPrimary,
    style: {
      background: "var(--action)",
      color: "var(--on-action)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      cursor: "pointer"
    }
  }, primaryCta), secondaryCta && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSecondary,
    style: {
      background: "transparent",
      color: "var(--action)",
      border: "1px solid var(--action)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      cursor: "pointer"
    }
  }, secondaryCta)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xxl)",
      display: "flex",
      justifyContent: "center"
    }
  }, children));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StoreCard.jsx
try { (() => {
/**
 * StoreCard — white utility card for store / accessories grids.
 * 1px hairline, 18px radius, 24px padding. No card shadow — only the product
 * render carries the system product-shadow.
 */
function StoreCard({
  image,
  name,
  price,
  action = "Buy",
  onAction,
  accent,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1 / 1",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-canvas-parchment)",
      marginBottom: "var(--space-md)"
    }
  }, image), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--action)",
      marginBottom: 4
    }
  }, accent), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-track)",
      color: "var(--color-ink)"
    }
  }, name), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--type-body-size)",
      color: "var(--color-ink)",
      marginTop: 2
    }
  }, price), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: onAction,
    style: {
      marginTop: "var(--space-sm)",
      color: "var(--action)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      textDecoration: "none"
    }
  }, action, " \u203A"));
}
Object.assign(__ds_scope, { StoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StoreCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soomin-web/BuyScreen.jsx
try { (() => {
// BuyScreen — the configurator: option chips + floating frosted sticky bar.
function BuyScreen({
  onNav
}) {
  const {
    ConfiguratorChip,
    Button
  } = window.NS;
  const Render = window.Render;
  const finishes = [{
    id: "silver",
    label: "Silver",
    tone: "silver"
  }, {
    id: "graphite",
    label: "Graphite",
    tone: "graphite"
  }, {
    id: "blue",
    label: "Blue",
    tone: "blue"
  }, {
    id: "gold",
    label: "Gold",
    tone: "gold"
  }];
  const storages = [{
    id: "256",
    label: "256GB",
    delta: "From $1099",
    price: 1099
  }, {
    id: "512",
    label: "512GB",
    delta: "From $1299",
    price: 1299
  }, {
    id: "1tb",
    label: "1TB",
    delta: "From $1499",
    price: 1499
  }];
  const [finish, setFinish] = React.useState("silver");
  const [storage, setStorage] = React.useState("256");
  const price = storages.find(s => s.id === storage).price;
  const finishTone = finishes.find(f => f.id === finish).tone;
  return /*#__PURE__*/React.createElement(window.Chrome, {
    category: "Studio Pro",
    links: [{
      label: "Overview"
    }, {
      label: "Compare"
    }],
    cta: "Buy",
    onNav: onNav
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "48px 22px 120px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 130,
      display: "flex",
      justifyContent: "center",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Render, {
    w: 360,
    h: 420,
    tone: finishTone,
    radius: 44
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--action)",
      fontWeight: 600,
      fontSize: 17,
      margin: "0 0 6px"
    }
  }, "New"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: "-0.5px",
      margin: "0 0 32px"
    }
  }, "Buy Studio Pro"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Finish."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 36
    }
  }, finishes.map(f => /*#__PURE__*/React.createElement(ConfiguratorChip, {
    key: f.id,
    thumb: /*#__PURE__*/React.createElement(Render, {
      w: 24,
      h: 24,
      tone: f.tone,
      radius: 12,
      shadow: false
    }),
    label: f.label,
    selected: finish === f.id,
    onSelect: () => setFinish(f.id)
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Storage."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, storages.map(s => /*#__PURE__*/React.createElement(ConfiguratorChip, {
    key: s.id,
    label: s.label,
    delta: s.delta,
    selected: storage === s.id,
    onSelect: () => setStorage(s.id)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      zIndex: 20,
      background: "var(--frosted-bg)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      borderTop: "1px solid var(--color-divider-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      color: "var(--color-ink)"
    }
  }, finishes.find(f => f.id === finish).label, " \xB7 ", storages.find(s => s.id === storage).label, " \xB7 ", /*#__PURE__*/React.createElement("strong", null, "$", price.toLocaleString())), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav("home")
  }, "Add to Bag"))));
}
window.BuyScreen = BuyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soomin-web/BuyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soomin-web/Chrome.jsx
try { (() => {
// Shared chrome + fake product render helpers for the UI kit.
// Components come from the design-system bundle on window.

const NS = window.AppleWebDesignSystem_f2d81f;

// A neutral, photographic-feeling product render placeholder (no real imagery).
function Render({
  w = 260,
  h = 170,
  tone = "silver",
  radius = 24,
  shadow = true,
  style
}) {
  const tones = {
    silver: "linear-gradient(150deg,#fbfbfd 0%,#e9e9ee 55%,#d6d6dc 100%)",
    graphite: "linear-gradient(150deg,#48484b 0%,#2b2b2e 60%,#191919 100%)",
    blue: "linear-gradient(150deg,#cde0f7 0%,#9fc2ee 60%,#6f9fdd 100%)",
    gold: "linear-gradient(150deg,#f4e6cf 0%,#e6cfa6 60%,#cdb184 100%)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: radius,
      background: tones[tone] || tones.silver,
      boxShadow: shadow ? "var(--shadow-product)" : "none",
      ...style
    }
  });
}
function Chrome({
  category,
  links,
  cta,
  children,
  onNav
}) {
  const {
    GlobalNav,
    SubNav,
    Footer
  } = NS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(GlobalNav, {
    items: [{
      label: "Store"
    }, {
      label: "Studio"
    }, {
      label: "Pulse"
    }, {
      label: "Watch"
    }, {
      label: "Vision"
    }, {
      label: "Support"
    }],
    brand: /*#__PURE__*/React.createElement("span", {
      style: {
        letterSpacing: "-0.02em"
      }
    }, "soomin")
  }), category && /*#__PURE__*/React.createElement(SubNav, {
    category: category,
    links: links,
    cta: cta,
    onCta: () => onNav && onNav("buy")
  })), children, /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      heading: "Shop and Learn",
      links: ["Store", "Studio", "Pulse", "Watch", "Accessories"]
    }, {
      heading: "Services",
      links: ["Music", "TV+", "Cloud", "Pay", "One"]
    }, {
      heading: "Account",
      links: ["Manage your ID", "soomin Account", "Cloud"]
    }, {
      heading: "About soomin",
      links: ["Newsroom", "Leadership", "Careers", "Contact"]
    }],
    legal: "Copyright \xA9 2026 Soomin Inc. All rights reserved.  \xB7  Privacy Policy  \xB7  Terms of Use  \xB7  Sales Policy"
  }));
}
Object.assign(window, {
  Render,
  Chrome,
  NS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soomin-web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soomin-web/HomeScreen.jsx
try { (() => {
// HomeScreen — the alternating full-bleed tile stack (light → dark → parchment).
function HomeScreen({
  onNav
}) {
  const {
    ProductTile,
    TextLink
  } = window.NS;
  const Render = window.Render;
  return /*#__PURE__*/React.createElement(window.Chrome, {
    onNav: onNav
  }, /*#__PURE__*/React.createElement(ProductTile, {
    variant: "light",
    eyebrow: "New",
    title: "Studio Pro",
    tagline: "Brilliantly capable. Beautifully quiet.",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    onSecondary: () => onNav("buy")
  }, /*#__PURE__*/React.createElement(Render, {
    w: 520,
    h: 300,
    tone: "silver",
    radius: 28
  })), /*#__PURE__*/React.createElement(ProductTile, {
    variant: "dark",
    title: "Pulse Ultra",
    tagline: "The most powerful chip we've ever built.",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    onSecondary: () => onNav("buy")
  }, /*#__PURE__*/React.createElement(Render, {
    w: 520,
    h: 300,
    tone: "graphite",
    radius: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(ProductTile, {
    variant: "parchment",
    title: "Watch",
    tagline: "A healthy leap ahead.",
    primaryCta: "Learn more",
    secondaryCta: null
  }, /*#__PURE__*/React.createElement(Render, {
    w: 220,
    h: 240,
    tone: "blue",
    radius: 40
  })), /*#__PURE__*/React.createElement(ProductTile, {
    variant: "dark-2",
    title: "Vision",
    tagline: "Welcome to spatial computing.",
    primaryCta: "Learn more",
    secondaryCta: null
  }, /*#__PURE__*/React.createElement(Render, {
    w: 300,
    h: 180,
    tone: "graphite",
    radius: 60
  }))), /*#__PURE__*/React.createElement(ProductTile, {
    variant: "dark-3",
    eyebrow: "Soomin 2030",
    title: "A greener way forward.",
    tagline: "Carbon neutral across the entire product line.",
    primaryCta: "Learn more",
    secondaryCta: null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    onDark: true,
    chevron: true
  }, "Read the report"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soomin-web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soomin-web/StoreScreen.jsx
try { (() => {
// StoreScreen — utility card grid + search, parchment canvas.
function StoreScreen({
  onNav
}) {
  const {
    StoreCard,
    SearchInput,
    Button
  } = window.NS;
  const Render = window.Render;
  const [q, setQ] = React.useState("");
  const products = [{
    name: "Studio Pro",
    price: "From $1099",
    tone: "silver",
    accent: "New"
  }, {
    name: "Pulse Ultra",
    price: "From $799",
    tone: "graphite",
    accent: "New"
  }, {
    name: "Watch Series",
    price: "From $399",
    tone: "blue"
  }, {
    name: "Buds Pro",
    price: "$149",
    tone: "silver"
  }, {
    name: "Vision",
    price: "From $2499",
    tone: "graphite",
    accent: "New"
  }, {
    name: "Magic Keyboard",
    price: "$99",
    tone: "silver"
  }, {
    name: "Charger",
    price: "$49",
    tone: "gold"
  }, {
    name: "Leather Case",
    price: "$59",
    tone: "blue"
  }].filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(window.Chrome, {
    category: "Store",
    links: [{
      label: "Shop"
    }, {
      label: "Accessories"
    }, {
      label: "Trade In"
    }],
    cta: "Account",
    onNav: onNav
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto",
      padding: "48px 22px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: "-0.5px",
      margin: 0
    }
  }, "Store. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-ink-muted-48)"
    }
  }, "The best way to buy the products you love.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search the store"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--gutter-card)"
    }
  }, products.map(p => /*#__PURE__*/React.createElement(StoreCard, {
    key: p.name,
    image: /*#__PURE__*/React.createElement(Render, {
      w: "70%",
      h: "70%",
      tone: p.tone,
      radius: 14,
      shadow: false
    }),
    name: p.name,
    price: p.price,
    accent: p.accent,
    action: "Buy",
    onAction: e => {
      e.preventDefault();
      onNav("buy");
    }
  }))), products.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-ink-muted-48)",
      fontSize: 17
    }
  }, "No results for \u201C", q, "\u201D.")));
}
window.StoreScreen = StoreScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soomin-web/StoreScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.GlobalNav = __ds_scope.GlobalNav;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.ConfiguratorChip = __ds_scope.ConfiguratorChip;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.StoreCard = __ds_scope.StoreCard;

})();
