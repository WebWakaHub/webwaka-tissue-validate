# ValidationTissue

> **Tissue ID:** `TIS-VALIDATE-v0.1.0`  
> **Classification:** Structural Boundary  
> **Package:** `@webwaka/tissue-validate`

## Overview

Validation tissue that coordinates cross-cell validation rules, schema enforcement, and invariant checking with offline-first validation caching.

## Composed Cells

- `CEL-VALIDATOR`
- `CEL-SCHEMASTORE`
- `CEL-INVARIANTCHECK`

## Doctrine Compliance

| Doctrine | Status |
|----------|--------|
| Build Once Use Infinitely | Enforced |
| Mobile First | Enforced |
| PWA First | Enforced |
| Offline First (NON-NEGOTIABLE) | Enforced |
| Nigeria First | Enforced — 30s timeout, en-NG locale, 2G-aware |
| Africa First | Enforced — Lagos-primary datacenter |
| Vendor Neutral AI | Enforced — No vendor lock-in |

## Architecture

The ValidationTissue tissue coordinates 3 cells through an event-driven coordination engine with:

- **Offline-First Queue**: All requests persisted to IndexedDB before execution
- **Nigeria-First Network Awareness**: Adaptive timeouts based on connection quality
- **Graceful Degradation**: Partial results when some cells are unavailable
- **Vector Clock Sync**: Conflict resolution for offline-to-online transitions

## API

```typescript
import { ValidationTissue } from '@webwaka/tissue-validate';

const tissue = new ValidationTissue();

// Coordinate across cells
const result = await tissue.coordinate({
  requestId: 'unique-id',
  sourceCell: 'CEL-VALIDATOR',
  targetCells: ['CEL-VALIDATOR', 'CEL-SCHEMASTORE', 'CEL-INVARIANTCHECK'],
  payload: { action: 'example' },
  timeout: 30000,  // Nigeria-first default
  locale: 'en-NG',
  offlineCapable: true,
});

// Sync offline queue
const syncResult = await tissue.sync({
  syncId: 'sync-id',
  lastSyncTimestamp: Date.now() - 60000,
  vectorClock: new Map(),
  conflictStrategy: 'last-write-wins',
});
```

## Constitutional Compliance

This tissue complies with the Tissue Layer Constitution:
- Composed exclusively of Cells
- No raw organelles
- No business-domain semantics
- No UI implementation
- Classification: Structural Boundary
